import { GET_RECOMMENDED_MOVIES, ITEMS_LOADING } from "../types";
import { url_movie } from "../../config/config";
import axios from "axios";
import { API_KEY } from "../../config/config";
import { itemsLoading } from "../itemsLoading";

export const getrecommendedMovies = id => dispatch => {
  dispatch(itemsLoading({ type: ITEMS_LOADING }, true));
  axios
    .get(
      `${url_movie}/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(res =>
      dispatch({
        type: GET_RECOMMENDED_MOVIES,
        payload: res.data.results.slice(0, 10)
      })
    ).then(res => dispatch(itemsLoading({ type: ITEMS_LOADING }, false)))
};
