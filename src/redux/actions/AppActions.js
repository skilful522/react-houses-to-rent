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

function setCurrentPage(currentPage) {
  return dispatch => {
    dispatch({
      type: APP_ACTIONS.SET_CURRENT_PAGE,
      payload: currentPage
    });
  };
}

function setTotalPages(totalPages) {
  return dispatch => {
    dispatch({
      type: APP_ACTIONS.SET_TOTAL_PAGES,
      payload: totalPages
    });
  };
}

export { getFlats, updateFlats, setCurrentPage, setTotalPages };
