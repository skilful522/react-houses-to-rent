import { APP_ACTIONS } from "../actionTypes/actionTypes";

function removeFlat(flat) {
  return dispatch => {
    dispatch({
      type: APP_ACTIONS.REMOVE_FLAT_FROM_FAV_LIST,
      payload: flat
    });
  };
}

export { removeFlat };
