import { GET_MOVIE_DETAILS } from "../types";
import url_movie from "../../config/config";
import API_KEY from "../../config/config";
import axios from "axios";

export const getsimilarMovies = id => dispatch => {
  axios
    .get(`${url_movie}/${id}?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res =>
      dispatch({
        type: GET_MOVIE_DETAILS,
        payload: res.data
      })
    );
};
