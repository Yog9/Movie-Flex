import { GET_MOVIE_TRAILER } from "../../actions/types";
const initialState = {
  movietrailers: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_TRAILER:
      return {
        ...state,
        movietrailers: action.payload
      };
    default:
      return state;
  }
};
