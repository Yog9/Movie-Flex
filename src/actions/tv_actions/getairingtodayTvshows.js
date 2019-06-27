import { GET_AIRINGTODAY_TVSHOWS } from "../types";
import { url_tv } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";

export const getairingtodayTvshows = () => dispatch => {
    axios
        .get(`${url_tv}/airing_today?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => {
            dispatch({
                type: GET_AIRINGTODAY_TVSHOWS,
                payload: res.data.results.slice(0, 7)
            })
        }

        );
};
