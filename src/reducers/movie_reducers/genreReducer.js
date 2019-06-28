import { GET_GENRE, ITEMS_LOADING } from "../../actions/types";

const initialState = {
  genre: [],
  loading: true
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRE:
      return {
        ...state,
        genre: action.payload,
        loading: false
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
