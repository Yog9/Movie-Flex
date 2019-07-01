import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { itemsLoading } from "./actions/itemsLoading";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import Search from "./components/Search/Search";
import VerticalNav from "./components/VerticalNav/VerticalNav";
import Movies from "./components/Movies/Movies";
import MovieDetails from "./components/Movies/MovieDetails";
import Tv from "./components/TV/Tv";
import Loading from "./components/Loader/Loading";
class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
]         <VerticalNav />
          <Loading />
          <Switch>
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/tvshows" component={Tv} />
            <Route
              exact
              path="/"
              component={() => <Redirect to="/movies" />}
            />
            <Route path="/search" component={Search} />
            <Route path="/movies/details/:id" component={MovieDetails} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
