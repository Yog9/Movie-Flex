import { GET_TV_GENRE } from "../types";
import { url } from "../../config/config";
import { API_KEY } from "../../config/config";
import { itemsLoading} from "../../actions/itemsLoading";
import axios from "axios";

export const gettvgenre = () => dispatch => {
    dispatch(itemsLoading(true));
    axios
        .get(`${url}/genre/tv/list?api_key=${API_KEY}&language=en-US`)
        .then(res =>{
            console.log("In action of tv genre results", res.data);
            dispatch(itemsLoading(false));
            dispatch({
                type: GET_TV_GENRE,
                payload: res.data.genres
            })
        }
        );
};
