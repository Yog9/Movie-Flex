import { GET_TV_DETAILS } from "../types";
import { url_tv } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";

export const gettvDetails = id => dispatch => {
    axios
        .get(`${url_tv}/${id}?api_key=${API_KEY}&language=en-US`)
        .then(res =>
            dispatch({
                type: GET_TV_DETAILS,
                payload: res.data
            })
        );
};
