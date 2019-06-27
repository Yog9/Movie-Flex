import { GET_TOP_RATED_MOVIES } from "../types";
import { url_movie } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";

export const gettopratedMovies = () => dispatch => {
  axios
    .get(`${url_movie}/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res =>
      dispatch({
        type: GET_TOP_RATED_MOVIES,
        payload: res.data.results.slice(0, 12)
      })
    );
};
