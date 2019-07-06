import { GET_TV_CASTS } from "../types";
import { url_tv } from "../../config/config";
import { API_KEY } from "../../config/config";
import { itemsLoading} from "../../actions/itemsLoading";
import axios from "axios";

export const gettvCasts = id => dispatch => {
    dispatch(itemsLoading(true));
    axios.get(`${url_tv}/${id}/credits?api_key=${API_KEY}&language=en-US`).then(res =>{
        dispatch(itemsLoading(false));
        dispatch({
            type: GET_TV_CASTS,
            payload: res.data.cast.slice(0, 6)
        })
    }
    );
};
