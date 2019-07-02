import { GET_POPULAR_MOVIES } from "../types";
import { url_movie } from "../../config/config";

import { API_KEY } from "../../config/config";
import axios from "axios";
import { itemsLoading } from "../itemsLoading";

export const getpopularMovies = () => dispatch => {
  dispatch(itemsLoading(true));
  axios
    .get(`${url_movie}/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then((res) => {
      dispatch(itemsLoading(false));
      dispatch({
        type: GET_POPULAR_MOVIES,
        payload: res.data.results.slice(0, 12)
      });
    })
};
