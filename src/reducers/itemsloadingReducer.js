import { ITEMS_LOADING } from "../actions/types";
const initialState = {
    isLoading: false
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ITEMS_LOADING:
            console.log("loading reducer: ", action.payload);
            return {
              ...state,
              isLoading: action.payload,
            };
        default:
            return state;
    }
};
