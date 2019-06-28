import { GET_TOPRATED_TVSHOWS } from "../types";
import { url_tv } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";

export const gettopratedTvshows = () => dispatch => {
    axios
        .get(`${url_tv}/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => {
            dispatch({
                type: GET_TOPRATED_TVSHOWS,
                payload: res.data.results.slice(0, 12)
            })
        }

        );
};
