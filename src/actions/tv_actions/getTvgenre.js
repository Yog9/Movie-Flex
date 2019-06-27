import { GET_TV_GENRE } from "../types";
import { url } from "../../config/config";
import { API_KEY } from "../../config/config";
import axios from "axios";

export const getgenre = () => dispatch => {
    axios
        .get(`${url}/genre/tv/list?api_key=${API_KEY}&language=en-US`)
        .then(res =>
            dispatch({
                type: GET_TV_GENRE,
                payload: res.data.genres
            })
        );
};
