import { GET_FLATS } from "../actions/AppActions";
import { UPDATE_FLATS } from "../actions/AppActions";

const initialState = {
  flats: []
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FLATS:
      return { ...state, flats: action.payload };
    case UPDATE_FLATS:
      return { ...state, flats: action.payload };
    default:
      return state;
  }
}

export { appReducer };
