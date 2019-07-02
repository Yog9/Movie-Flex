import { GET_SIMILAR_TVSHOWS } from "../types";
import { url_tv } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";
import { itemsLoading} from "../../actions/itemsLoading";

export const getsimilarTvshows = id => dispatch => {
    dispatch(itemsLoading(true));
    axios
        .get(`${url_tv}/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => {
            dispatch(itemsLoading(false))
            dispatch({
                type: GET_SIMILAR_TVSHOWS,
                payload: res.data.results.slice(0, 7)
            })
            console.log("res: ", res.data);
        }

        );
};
