import { APP_ACTIONS } from "../actionTypes/actionTypes";

function getSearchInput(searchInput) {
  return dispatch => {
    dispatch({
      type: APP_ACTIONS.GET_SEARCH_INPUT,
      payload: searchInput
    });
  };
}

export { getSearchInput };
