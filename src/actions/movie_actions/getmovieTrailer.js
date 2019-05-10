import { GET_MOVIE_TRAILER } from "../types";
import url_movie from "../../config/config";
import API_KEY from "../../config/config";
import axios from "axios";

export const getmovieTrailer = id => dispatch => {
  axios
    .get(`${url_movie}/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then(res =>
      dispatch({
        type: GET_MOVIE_TRAILER,
        payload: res.data
      })
    );
};
