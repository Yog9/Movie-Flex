import { GET_MOVIE_REVIEWS, ITEMS_LOADING } from "../types";
import { url_movie } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";
import { itemsLoading } from "../itemsLoading";

export const getmovieReviews = id => dispatch => {
  dispatch(itemsLoading({ type: ITEMS_LOADING }, true));
  axios
    .get(`${url_movie}/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res =>
      dispatch({
        type: GET_MOVIE_REVIEWS,
        payload: res.data.results[0]
      })
    ).then(res => dispatch(itemsLoading({ type: ITEMS_LOADING }, false)))
};
