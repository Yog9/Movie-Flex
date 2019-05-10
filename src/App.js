import "./App.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import VerticalNav from "./components/VerticalNav.js/VerticalNav";
import Movies from "./components/Movies/Movies";
class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <VerticalNav />
          <Switch>
            <Route exact path="/movies" component={Movies} />
            <Route
              expact
              path="/"
              component={() => <Redirect to="/movies" />}
            />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
