import { GET_MOVIE_REVIEWS } from "../types";
import { url_movie } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";

export const getmovieReviews = id => dispatch => {
  axios
    .get(`${url_movie}/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res =>
      dispatch({
        type: GET_MOVIE_REVIEWS,
        payload: res.data.results.slice(0, 2)
      })
    );
};
