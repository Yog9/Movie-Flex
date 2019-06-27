import { GET_TOPRATED_TVSHOWS } from "../../actions/types";
const initialState = {
    topratedTvshows: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TOPRATED_TVSHOWS:
            return {
                ...state,
                topratedTvshows: action.payload
            };
        default:
            return state;
    }
};
