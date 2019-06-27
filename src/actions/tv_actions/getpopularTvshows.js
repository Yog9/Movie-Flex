import { GET_POPULAR_TVSHOWS } from "../types";
import { url_tv } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";

export const getpopularTvshows = () => dispatch => {
    axios
        .get(`${url_tv}/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => {
            dispatch({
                type: GET_POPULAR_TVSHOWS,
                payload: res.data.results.slice(0, 7)
            })
        }

        );
};
