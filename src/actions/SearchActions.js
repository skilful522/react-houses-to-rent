const GET_SEARCH_INPUT = "GET_SEARCH_INPUT";

function getSearchInput(searchInput) {
  return dispatch => {
    dispatch({
      type: GET_SEARCH_INPUT,
      payload: searchInput
    });
  };
}

export { GET_SEARCH_INPUT, getSearchInput };
