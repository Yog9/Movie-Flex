import { GET_SIMILAR_MOVIES } from "../../actions/types";
const initialState = {
  similarMovies: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SIMILAR_MOVIES:
    console.log("similarMovies in reducer: ", action.payload);
      return {
        ...state,
        similarMovies: action.payload
      };
    default:
      return state;
  }
};
