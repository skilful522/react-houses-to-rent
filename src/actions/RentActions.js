const SET_FLAT_TO_FAV_LIST = "SET_FLAT_TO_FAV_LIST";

function setFlat(flat) {
  return dispatch => {
    dispatch({
      type: SET_FLAT_TO_FAV_LIST,
      payload: flat
    });
  };
}

export { SET_FLAT_TO_FAV_LIST, setFlat };
