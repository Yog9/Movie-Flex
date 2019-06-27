import { GET_TVTRAILER } from "../types";
import { url_tv } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";

export const getTvtrailer = (id) => dispatch => {
    axios
        .get(`${url_tv}/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then(res => {
            dispatch({
                type: GET_TVTRAILER,
                payload: res.data.results.slice(0, 1)
            })
        }

        );
};
