import { GET_MOVIE_CASTS } from "../types";
import { url_movie } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";

export const getmovieCasts = id => dispatch => {
  axios.get(`${url_movie}/${id}/casts?api_key=${API_KEY}`).then(res =>
    dispatch({
      type: GET_MOVIE_CASTS,
      payload: res.data.cast.slice(0, 10)
    })
  );
};
