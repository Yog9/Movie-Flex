import { GET_GENRE } from "../../actions/types";
const initialState = {
  genre: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    default:
      return state;
  }
};
