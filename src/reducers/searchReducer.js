import { GET_SEARCH_RESULTS } from "../actions/types";
const initialState = {
    searchResults: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.payload
            };
        default:
            return state;
    }
};
