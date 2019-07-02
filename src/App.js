import "./App.css";
import React, { Component } from "react";
import {
  HashRouter,
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
import TvDetails from "./components/TV/TvDetails";
class App extends Component {
  render() {
    return (
      <HashRouter basename="/Movie-Flex">
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
            <Route path="/tvshows/details/:id" component={TvDetails} />
          </Switch>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
