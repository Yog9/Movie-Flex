import { GET_MOVIE_DETAILS } from "../types";
import { url_movie } from "../../config/config";
import { API_KEY } from "../../config/config";
import { itemsLoading } from "../../actions/itemsLoading";
import axios from "axios";

export const getmovieDetails = id => dispatch => {
  dispatch(itemsLoading(true));
  axios
    .get(`${url_movie}/${id}?api_key=${API_KEY}&language=en-US`)
    .then((res) => {
    dispatch(itemsLoading(false));
    dispatch({
        type: GET_MOVIE_DETAILS,
        payload: res.data
      });
    });
};
