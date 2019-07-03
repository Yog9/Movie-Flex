import { GET_TV_GENRE } from "../../actions/types";
const initialState = {
    tvgenre: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TV_GENRE:
                console.log("In genre tv reducer", action.payload);
            return {
                ...state,
                tvgenre: action.payload
            };
        default:
            return state;
    }
};
