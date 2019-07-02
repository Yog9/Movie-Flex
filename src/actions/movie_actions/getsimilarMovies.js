import { GET_SIMILAR_MOVIES } from "../types";
import { url_movie } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";
import { itemsLoading } from "../itemsLoading";

export const getsimilarMovies = id => dispatch => {
  dispatch(itemsLoading(true));
  axios
    .get(`${url_movie}/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
    .then((res) => {
      dispatch(itemsLoading(false));
      dispatch({
        type: GET_SIMILAR_MOVIES,
        payload: res.data.results.slice(0, 7)
      });
      console.log("res: ", res.data);
    })
};
