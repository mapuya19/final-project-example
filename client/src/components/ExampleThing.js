// Import important
import React, { useState } from "react";

// Material Components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import axios from "axios";
const qs = require("qs");

function ExampleThing({ homeToThing }) {
  const [token, setToken] = useState("");
  const [gotData, setGotData] = useState(false);
  // const [gotToken, setGotToken] = useState(false);

  function getUser() {
    axios
      .get("https://spotify-notes.herokuapp.com/api/Home", { crossdomain: true })
      .then((res) => {
        setToken(res.data.token);
        // console.log(res.data.token);
      });
  }

  function sendUser() {
    axios
      .post("https://spotify-notes.herokuapp.com/api/Home", qs.stringify(homeToThing.token))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setGotData(true);
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      // justify="center"
      style={{ minHeight: "100vh", maxWidth: "80vw" }}
    >
      <Button
        size="medium"
        style={{ backgroundColor: "#C6C6C6" }}
        onClick={sendUser}
      >
        Get Spotify Data!
      </Button>

      {gotData ? (
        <Card>
          <CardContent>
            <Typography align="center" variant="body1" component="div">
              Your token is: {token}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={getUser}>
              Show Token
            </Button>
          </CardActions>
        </Card>
      ) : (
        <div />
      )}
    </Grid>
  );
}

export default ExampleThing;
