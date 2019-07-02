import { GET_SEARCH_RESULTS } from "./types";
import { url } from "../config/config";
import { API_KEY } from "../config/config";
import axios from "axios";
import { itemsLoading } from "./itemsLoading";

export const getsearchResults = (query = 'harry') => dispatch => {
  dispatch(itemsLoading(true));
  console.log('In here!!!');
  axios
    .get(`${url}/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
    .then((res) => {
      console.log("In action of search results", res.data.results);
      dispatch(itemsLoading(false));
      dispatch(
        {
          type: GET_SEARCH_RESULTS,
          payload: res.data.results
        })
    })
};
