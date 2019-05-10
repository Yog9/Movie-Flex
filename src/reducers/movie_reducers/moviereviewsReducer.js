import { GET_MOVIE_REVIEWS } from "../../actions/types";
const initialState = {
  moviereviews: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_REVIEWS:
      return {
        ...state,
        moviereviews: action.payload
      };
    default:
      return state;
  }
};
