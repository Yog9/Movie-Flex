import { GET_TV_TRAILER } from "../../actions/types";
const initialState = {
    tvtrailers: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TV_TRAILER:
            return {
                ...state,
                tvtrailers: action.payload
            };
        default:
            return state;
    }
};
