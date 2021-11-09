// Imports
import { useState } from "react";
import axios from "axios";

// CSS
import "../css/App.css";

// Material Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";

// Custom Components
import Sidebar from "../components/Sidebar";

function Tracks() {
  const [artistObjs, setArtistObjs] = useState("");
  const [gotTracks, setGotTracks] = useState(false);
  const [tableCols, setTableCols] = useState([]);
  const [tableRows, setTableRows] = useState([]);

  function getTracks() {
    axios
      .get("http://localhost:8000/Tracks", { crossdomain: true })
      .then((res) => {
        setArtistObjs(res.data);

        if (artistObjs.length !== 0) {
          tracksToTable(artistObjs);
          setGotTracks(true);
        }
      });
  }

  function tracksToTable(data) {
    let columns = [];
    let rows = [];

    if (typeof artistObjs !== "string") {
      artistObjs.forEach((ele) => {
        columns.push(
          { field: "id", headerName: "ID" },
          {
            field: "track",
            headerName: "Track",
            width: 200,
          },
          {
            field: "artist",
            headerName: "Artist",
            width: 200,
          }
        );
        rows.push({
          id: artistObjs.indexOf(ele),
          track: ele.name,
          artist: ele.artist,
        });
      });
    }

    setTableCols(columns);
    setTableRows(rows);
  }

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
          THE TRACKS PAGE
        </Typography>
        {gotTracks === false ? (
          <Button
            size="medium"
            style={{ backgroundColor: "#C6C6C6" }}
            onClick={getTracks}
          >
            Get Top Tracks
          </Button>
        ) : (
          <div />
        )}

        {gotTracks === true ? (
          <div
            style={{ alignItems: "center", height: 400, maxWidth: "80vw" }}
          >
            <DataGrid
              rows={tableRows}
              columns={tableCols}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
            />
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default Tracks;
