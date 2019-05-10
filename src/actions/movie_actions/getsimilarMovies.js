import { GET_SIMILAR_MOVIES } from "../types";
import url_movie from "../../config/config";
import API_KEY from "../../config/config";
import axios from "axios";

export const getsimilarMovies = id => dispatch => {
  axios
    .get(`${url_movie}/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res =>
      dispatch({
        type: GET_SIMILAR_MOVIES,
        payload: res.data
      })
    );
};
