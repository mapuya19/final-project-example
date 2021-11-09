require("./db");
require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const SpotifyWebApi = require("spotify-web-api-node");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Track = mongoose.model("Track");

const port = process.env.PORT || 5000;
const clientSec =
  process.env.CLIENT_S || "40e30d5d0cf44013aeb69b314f7de079";

// enable sessions
const session = require("express-session");

// const { json } = require("body-parser");
const sessionOptions = {
  secret: "secret cookie thang (store this elsewhere!)",
  resave: true,
  saveUninitialized: true,
};

const spotifyApi = new SpotifyWebApi({
  clientId: "99f44f66c083412ea9fd3c6770ee2881",
  clientSecret: clientSec,
  redirectUri: "https://spotify-notes.herokuapp.com/Home", // Production
  // redirectUri: "http://localhost:8000/Home", // Local
});

let spotifyThing;

app.use(session(sessionOptions));

// body parser setup
app.use(bodyParser.urlencoded({ extended: false }));

// serve static
app.use(express.static(path.join(__dirname, "client", "build")));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.redirect("Home");
});

app.get("/Home", (req, res) => {
  let testUser;

  if (spotifyThing !== "") {
    testUser = {
      token: spotifyThing,
    };
  }

  spotifyApi.setAccessToken(spotifyThing);

  let jsonSend = JSON.stringify(testUser);
  // console.log(jsonSend);

  res.send(jsonSend);
});

app.post("/Home", (req, res) => {
  spotifyThing = req.body.value;
});

app.get("/Tracks", (req, res) => {
  if (spotifyThing !== "") {
    spotifyApi.getMyTopTracks().then(
      function (data) {
        let topTracks = data.body.items;
        let slimTracks = topTracks.map((index) => ({
          artist: index.artists[0].name,
          name: index.name,
        }));

        slimTracks.forEach((object) => {
          new Track({
            artist: object.artist,
            name: object.name,
          })
            .save()
            .then((item) => {
              // res.send("item saved to database"); continue
            })
            .catch((err) => {
              res.status(400).send("unable to save to database");
            });
        });

        res.send(slimTracks);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }
});

app.get("/ClearAll", (req, res) => {
  Track.deleteMany()
    .then(function () {
      console.log("Data deleted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
});

// Serve React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log("server is up"));
