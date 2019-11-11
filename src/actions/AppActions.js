const GET_FLATS = "GET_FLATS";
const UPDATE_FLATS = "UPDATE_FLATS";

function getFlats(flats) {
  return dispatch => {
    dispatch({
      type: GET_FLATS,
      payload: flats
    });
  };
}

function updateFlats(flats) {
  return dispatch => {
    dispatch({
      type: UPDATE_FLATS,
      payload: flats
    });
  };
}

export { GET_FLATS, getFlats, UPDATE_FLATS, updateFlats };
