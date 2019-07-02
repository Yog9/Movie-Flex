import {  GET_TVTRAILER } from "../../actions/types";
const initialState = {
    tvtrailers: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TVTRAILER:
            return {
                ...state,
                tvtrailers: action.payload
            };
        default:
            return state;
    }
};
