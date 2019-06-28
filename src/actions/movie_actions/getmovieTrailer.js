import { GET_MOVIE_TRAILER, ITEMS_LOADING } from "../types";
import { url_movie } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";
import { itemsLoading } from "../itemsLoading";

export const getmovieTrailer = id => dispatch => {
  dispatch(itemsLoading({ type: ITEMS_LOADING }, true));
  axios
    .get(`${url_movie}/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then(res =>
      dispatch({
        type: GET_MOVIE_TRAILER,
        payload: res.data.results[0]
      })
    ).then(res => dispatch(itemsLoading({ type: ITEMS_LOADING }, false)))

};
