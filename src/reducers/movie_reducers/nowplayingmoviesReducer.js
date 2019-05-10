import { GET_NOW_PLAYING_MOVIES } from "../../actions/types";
const initialState = {
  nowplayingMovies: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        nowplayingMovies: action.payload
      };
    default:
      return state;
  }
};
