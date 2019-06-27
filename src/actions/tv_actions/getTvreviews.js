import { GET_TVREVIEWS } from "../types";
import { url_tv } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";

export const getTvreviews = (id) => dispatch => {
    axios
        .get(`${url_tv}/${id}/reviews?api_key=${API_KEY}&language=en-US`)
        .then(res => {
            dispatch({
                type: GET_TVREVIEWS,
                payload: res.data.results.slice(0, 1)
            })
        }

        );
};
