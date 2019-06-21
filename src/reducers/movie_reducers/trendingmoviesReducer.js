import { GET_TRENDING_MOVIES } from "../../actions/types";
const initialState = {
  trendingMovies: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING_MOVIES:
      return {
        ...state,
        trendingMovies: action.payload
      };
    default:
      return state;
  }
};
