import { GET_UPCOMING_MOVIES, ITEMS_LOADING } from "../types";
import { url_movie } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";
import { itemsLoading } from "../itemsLoading";

export const getupcomingMovies = () => dispatch => {
  dispatch(itemsLoading({ type: ITEMS_LOADING }, true));
  axios
    .get(`${url_movie}/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res =>
      dispatch({
        type: GET_UPCOMING_MOVIES,
        payload: res.data.results.slice(0, 12)
      })
    ).then(res => dispatch(itemsLoading({ type: ITEMS_LOADING }, false)))
};
