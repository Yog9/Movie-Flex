import { GET_AIRINGTODAY_TVSHOWS } from "../types";
import { url_tv } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";
import { itemsLoading} from "../../actions/itemsLoading";

export const getairingtodayTvshows = () => dispatch => {
    dispatch(itemsLoading(true));
    axios
        .get(`${url_tv}/airing_today?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => {
            dispatch(itemsLoading(false))
            dispatch({
                type: GET_AIRINGTODAY_TVSHOWS,
                payload: res.data.results.slice(0, 7)
            })
        }

        );
};
