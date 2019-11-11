import {APP_ACTIONS} from "../actionTypes/actionTypes";

const initialState = {
  searchInput: "London"
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.GET_SEARCH_INPUT:
      return { ...state, searchInput: action.payload };
    default:
      return state;
  }
}

export { searchReducer };
