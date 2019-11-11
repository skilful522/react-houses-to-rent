import { GET_SEARCH_INPUT } from "../actions/SearchActions";

const initialState = {
  searchInput: "London"
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_INPUT:
      return { ...state, searchInput: action.payload };
    default:
      return state;
  }
}

export { searchReducer };
