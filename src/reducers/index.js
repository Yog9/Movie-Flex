//import all movie reducers
import { combineReducers } from "redux";
import moviecastReducer from "../reducers/movie_reducers/moviecastReducer";
import moviedetailsReducer from "./movie_reducers/moviedetailsReducer";
import moviereviewsReducer from "./movie_reducers/moviereviewsReducer";
import movietrailerReducer from "./movie_reducers/movietrailerReducer";
import nowplayingmoviesReducer from "./movie_reducers/nowplayingmoviesReducer";
import popularmoviesReducer from "./movie_reducers/popularmoviesReducer";
import recommendedmoviesReducer from "./movie_reducers/recommendedmoviesReducer";
import similarmoviesReducer from "./movie_reducers/similarmoviesReducer";
import topratedmoviesReducer from "./movie_reducers/topratedmoviesReducer";
import upcomingmoviesReducer from "./movie_reducers/upcomingmoviesReducer";
import genreReducer from "./movie_reducers/genreReducer";
import trendingmoviesReducer from "./movie_reducers/trendingmoviesReducer";
export default combineReducers({
  //all state
  moviecasts: moviecastReducer,
  moviedetails: moviedetailsReducer,
  moviereviews: moviereviewsReducer,
  movietrailers: movietrailerReducer,
  nowplayingMovies: nowplayingmoviesReducer,
  popularmovies: popularmoviesReducer,
  recommendedMovies: recommendedmoviesReducer,
  similarMovies: similarmoviesReducer,
  topratedMovies: topratedmoviesReducer,
  upcomingMovies: upcomingmoviesReducer,
  genre: genreReducer,
  trendingMovies: trendingmoviesReducer
});
