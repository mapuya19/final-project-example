// 1ST DRAFT DATA MODEL
const mongoose = require("mongoose");

// Users
const User = new mongoose.Schema({
  tracks: [String], // array of tracks
  artists: [String], // array of artists
});

// Tracks
const Track = new mongoose.Schema({
  artist: String,
  name: String,
});

// Artists
const Artist = new mongoose.Schema({
  name: String,
  genre: String,
});

// TODO: add remainder of setup for slugs, connection, registering models, etc. below
mongoose.model("User", User);
mongoose.model("Track", Track);
mongoose.model("Artist", Artist);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }); // Production
// mongoose.connect("mongodb://localhost/final-proj"); // Local
