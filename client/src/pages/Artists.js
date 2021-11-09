// Imports
// import { useEffect, useState } from "react";
// import axios from "axios";

// CSS
import "../css/App.css";

// Material Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

// Custom Components
import Sidebar from "../components/Sidebar";

function Artists() {
  // const [artistObjs, setArtistObjs] = useState("");

  // function getArtists() {
  //   axios
  //     .get("http://localhost:8000/Tracks", { crossdomain: true })
  //     .then((res) => {
  //       setArtistObjs(res.data);
  //       console.log(artistObjs);
  //     });
  // }

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Sidebar />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Spotify Notes
            </Typography>
            {/* <a href={loginUrl}>
                <Button color="inherit" style={{ color: "white" }}>
                  Login
                </Button>
              </a> */}
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          THE ARTISTS PAGE
        </Typography>
        {/* <Button
          size="medium"
          style={{ backgroundColor: "#C6C6C6" }}
          onClick={getArtists}
        >
          Get Spotify Data!
        </Button> */}
      </div>
    </div>
  );
}

export default Artists;
