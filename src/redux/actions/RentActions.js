import {APP_ACTIONS} from "../actionTypes/actionTypes";

function setFlat(flat) {
  return dispatch => {
    dispatch({
      type: APP_ACTIONS.SET_FLAT_TO_FAV_LIST,
      payload: flat
    });
  };
}

export { setFlat };
