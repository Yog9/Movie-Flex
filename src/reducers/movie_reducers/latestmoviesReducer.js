import { GET_LATEST_MOVIES } from "../../actions/types";
const initialState = {
  latestMovies: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LATEST_MOVIES:
      return {
        ...state,
        latestMovies: action.payload
      };
    default:
      return state;
  }
};
