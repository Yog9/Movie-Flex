import { GET_TOPRATED_TVSHOWS } from "../types";
import { API_KEY } from "../../config/config";
import axios from "axios";
import { itemsLoading} from "../../actions/itemsLoading";

export const gettopratedTvshows = () => dispatch => {
    dispatch(itemsLoading(true));
    axios
        .get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => {
            console.log("In top rated tv action", res.data);
            dispatch(itemsLoading(false));
            dispatch({
                type: GET_TOPRATED_TVSHOWS,
                payload: res.data.results.slice(0, 12)
            })
        }

        );
};
