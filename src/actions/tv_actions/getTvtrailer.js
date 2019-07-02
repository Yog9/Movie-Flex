import { GET_TVTRAILER } from "../types";
import { url_tv } from "../../config/config";
import { API_KEY } from "../../config/config";
import { itemsLoading} from "../../actions/itemsLoading";
import axios from "axios";

export const getTvtrailer = (id) => dispatch => {
    dispatch(itemsLoading(true));
    axios
        .get(`${url_tv}/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then(res => {
        dispatch(itemsLoading(false));
        dispatch({
                type: GET_TVTRAILER,
                payload: res.data.results[0]
            })
        }

        );
};
