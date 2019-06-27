import { GET_NOW_PLAYING_MOVIES } from "../types";
import { url_movie } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";

export const getnowplayingMovies = () => dispatch => {
  axios
    .get(`${url_movie}/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res =>
      dispatch({
        type: GET_NOW_PLAYING_MOVIES,
        payload: res.data.results.slice(0, 8)
      })
    );
};
