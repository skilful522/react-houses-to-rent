import { APP_ACTIONS } from "../actionTypes/actionTypes";

function getFlats(flats) {
  return dispatch => {
    dispatch({
      type: APP_ACTIONS.GET_FLATS,
      payload: flats
    });
  };
}

function updateFlats(flats) {
  return dispatch => {
    dispatch({
      type: APP_ACTIONS.UPDATE_FLATS,
      payload: flats
    });
  };
}

export { getFlats, updateFlats };
