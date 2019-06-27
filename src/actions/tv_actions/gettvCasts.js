import { GET_TV_CASTS } from "../types";
import { url_tv } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";

export const gettvCasts = id => dispatch => {
    axios.get(`${url_tv}/${id}/casts?api_key=${API_KEY}`).then(res =>
        dispatch({
            type: GET_TV_CASTS,
            payload: res.data.cast.slice(0, 10)
        })
    );
};
