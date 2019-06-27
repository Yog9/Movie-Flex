import { GET_RECOMMENDED_MOVIES } from "../../actions/types";
const initialState = {
  recommendedMovies: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RECOMMENDED_MOVIES:
      return {
        ...state,
        recommendedMovies: action.payload
      };
    default:
      return state;
  }
};
