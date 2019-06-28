import { GET_MOVIE_CASTS, ITEMS_LOADING } from "../types";
import { url_movie } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";
import { itemsLoading } from "../itemsLoading";

export const getmovieCasts = id => dispatch => {
  dispatch(itemsLoading(ITEMS_LOADING, true));
  axios.get(`${url_movie}/${id}/casts?api_key=${API_KEY}`).then(res =>
    dispatch({
      type: GET_MOVIE_CASTS,
      payload: res.data.cast.slice(0, 10)
    })
  ).then(res => dispatch(itemsLoading(ITEMS_LOADING, false)))
};
