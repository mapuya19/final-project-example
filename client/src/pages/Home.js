// Imports
import { useEffect, useState } from "react";
import { loginUrl } from "../spotify.js";
import { getTokenFromUrl } from "../spotify.js";
// import SpotifyWebApi from "spotify-web-api-node";

// CSS
import "../css/App.css";

// Material Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// Custom Components
import ExampleThing from "../components/ExampleThing";
import Sidebar from "../components/Sidebar";

function Home() {
  // const spotify = new SpotifyWebApi();
  const [spotifyToken, setSpotifyToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // Spotify Authentication
  useEffect(() => {
    const _spotifyToken = getTokenFromUrl().access_token;

    window.location.hash = "";

    if (_spotifyToken) {
      setSpotifyToken((prevState) => {
        let token = Object.assign({}, prevState.token); // creating copy of state variable
        token.value = _spotifyToken; // update the name property, assign a new value
        return { token }; // return new object
      });

      setLoggedIn(true);

      // spotify.setAccessToken(_spotifyToken);

      // spotify.getMe().then(
      //   function (data) {
      //     console.log("User Data", data.body);
      //   },
      //   function (err) {
      //     console.log("Something went wrong!", err);
      //   }
      // );

      // spotify.getMyTopTracks().then(
      //   function (data) {
      //     console.log("Top Tracks", data.body);
      //   },
      //   function (err) {
      //     console.log("Something went wrong!", err);
      //   }
      // );

      // spotify.getMyTopArtists().then(
      //   function (data) {
      //     console.log("Top Artists", data.body);
      //   },
      //   function (err) {
      //     console.log("Something went wrong!", err);
      //   }
      // );
    }
  }, []);

  return (
    <div className="main-container">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Sidebar />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Spotify Notes
            </Typography>
            <a href={loginUrl}>
              <Button color="inherit" style={{ color: "white" }}>
                Login
              </Button>
            </a>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          This app will not work with Firefox! There is an issue with CORS.
          Please use Google Chrome for the best experience.
        </Typography>
      </div>
      <div className="form-container">
        {loggedIn ? <ExampleThing homeToThing={spotifyToken} /> : <div />}
      </div>
    </div>
  );
}

export default Home;
