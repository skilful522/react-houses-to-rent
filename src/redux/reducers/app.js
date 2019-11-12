import { APP_ACTIONS } from "../actionTypes/actionTypes";

const initialState = {
  flats: [],
  pageSize: 20,
  totalPages: 0,
  currentPage: 1,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.GET_FLATS:
      return { ...state, flats: action.payload };
    case APP_ACTIONS.UPDATE_FLATS:
      return { ...state, flats: action.payload };
    case APP_ACTIONS.SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload};
    case APP_ACTIONS.SET_TOTAL_PAGES:
      return {...state, totalPages: action.payload};
    default:
      return state;
  }
}

export { appReducer };
