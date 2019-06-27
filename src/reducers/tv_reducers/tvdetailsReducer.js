import { GET_TV_DETAILS } from "../../actions/types";
const initialState = {
    tvdetails: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TV_DETAILS:
            return {
                ...state,
                tvdetails: action.payload
            };
        default:
            return state;
    }
};
