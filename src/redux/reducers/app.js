import { APP_ACTIONS } from "../actionTypes/actionTypes";

const initialState = {
  flats: []
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.GET_FLATS:
      return { ...state, flats: action.payload };
    case APP_ACTIONS.UPDATE_FLATS:
      return { ...state, flats: action.payload };
    default:
      return state;
  }
}

export { appReducer };
