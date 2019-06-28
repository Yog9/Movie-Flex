import { ITEMS_LOADING, GET_SEARCH_RESULTS } from "./types";
import { url } from "../config/config";
import { API_KEY } from "../config/config";
import axios from "axios";
import { itemsLoading } from "./itemsLoading";

export const getsearchResults = (query) => dispatch => {
  dispatch(itemsLoading({ type: ITEMS_LOADING }, true));
  axios
    .get(`${url}/search/multi?api_key=${API_KEY}&language=en-US&page=1query=${query}&page=1&include_adult=false`)
    .then(res =>
      dispatch({
        type: GET_SEARCH_RESULTS,
        payload: res.data.results.slice(0, 10)
      })
    ).then(res => dispatch(itemsLoading({ type: ITEMS_LOADING }, false)))
};
