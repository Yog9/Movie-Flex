import { GET_UPCOMING_MOVIES } from "../../actions/types";
const initialState = {
  upcomingMovies: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: action.payload
      };
    default:
      return state;
  }
};
