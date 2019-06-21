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
import MovieDetails from "./components/Movies/MovieDetails";
class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <VerticalNav />
          <Switch>
            <Route exact path="/movies" component={Movies} />
            <Route
              exact
              path="/"
              component={() => <Redirect to="/movies" />}
            />
            <Route exact path="/movie/details/:id" component={MovieDetails} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
