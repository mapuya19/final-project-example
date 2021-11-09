// Imports
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "../src/pages/Home";
import Tracks from "../src/pages/Tracks";
import Artists from "../src/pages/Artists";
import ClearAll from "../src/pages/ClearAll";

// CSS
import "./css/App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="Home" />
          <Route exact path="/Home" render={() => <Home />} />
          <Route path="/Tracks" render={() => <Tracks />} />
          <Route path="/Artists" render={() => <Artists />} />
          <Route path="/ClearAll" render={() => <ClearAll />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
