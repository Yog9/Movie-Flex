import { GET_LATEST_MOVIES } from "../types";
import { url_movie } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";

export const getlatestMovies = () => dispatch => {
  axios.get(`${url_movie}/latest?api_key=${API_KEY}&language=en-US`).then(res =>
    dispatch({
      type: GET_LATEST_MOVIES,
      payload: res.data.results.slice(0, 8)
    })
  );
};
