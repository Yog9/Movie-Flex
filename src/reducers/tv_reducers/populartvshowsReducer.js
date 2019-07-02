import { GET_POPULAR_TVSHOWS } from "../../actions/types";
const initialState = {
    popularTvshows: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POPULAR_TVSHOWS:
            return {
                ...state,
                popularTvshows: action.payload
            };
        default:
            return state;
    }
};
