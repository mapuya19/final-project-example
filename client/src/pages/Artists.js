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

function Artists() {
  const [artistObjs, setArtistObjs] = useState("");
  const [gotArtists, setGotArtists] = useState(false);
  const [tableCols, setTableCols] = useState([]);
  const [tableRows, setTableRows] = useState([]);

  function getArtists() {
    axios
      .get("https://spotify-notes.herokuapp.com/api/Artists", { crossdomain: true })
      .then((res) => {
        setArtistObjs(res.data);

        if (artistObjs.length !== 0) {
          artistsToTable(artistObjs);
          setGotArtists(true);
        }
      });
  }

  function artistsToTable(data) {
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
            field: "genre",
            headerName: "Genre",
            width: 200,
          }
        );
        rows.push({
          id: artistObjs.indexOf(ele),
          track: ele.name,
          genre: ele.genre,
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
          THE ARTIST PAGE
        </Typography>
        {gotArtists === false ? (
          <Button
            size="medium"
            style={{ backgroundColor: "#C6C6C6" }}
            onClick={getArtists}
          >
            Get Top Artists
          </Button>
        ) : (
          <div />
        )}

        {gotArtists === true ? (
          <div style={{ alignItems: "center", height: 400, maxWidth: "80vw" }}>
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

export default Artists;
