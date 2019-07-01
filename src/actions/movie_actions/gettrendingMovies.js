import { GET_TRENDING_MOVIES } from "../types";
import { url } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";
import { itemsLoading } from "../itemsLoading";

export const gettrendingMovies = () => dispatch => {
  dispatch(itemsLoading(true));
  axios.get(`${url}/trending/movie/week?api_key=${API_KEY}`).then((res) => {
    dispatch(itemsLoading(false))
    dispatch({
      type: GET_TRENDING_MOVIES,
      payload: res.data.results.slice(0, 12)
    })
  })
};
