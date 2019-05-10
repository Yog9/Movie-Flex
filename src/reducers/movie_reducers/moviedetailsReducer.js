import { GET_MOVIE_DETAILS } from "../../actions/types";
const initialState = {
  moviedetails: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        moviedetails: action.payload
      };
    default:
      return state;
  }
};
