import { GET_AIRINGTODAY_TVSHOWS } from "../../actions/types";
const initialState = {
    airingtodayTvshows: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_AIRINGTODAY_TVSHOWS:
            return {
                ...state,
                airingtodayTvshows: action.payload
            };
        default:
            return state;
    }
};
