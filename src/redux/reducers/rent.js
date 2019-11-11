import { APP_ACTIONS } from "../actionTypes/actionTypes";

const initialState = {
  favoriteFlats: []
};

function rentReducer(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.SET_FLAT_TO_FAV_LIST:
      return {
        ...state,
        favoriteFlats: [...state.favoriteFlats, action.payload]
      };
    default:
      return state;
  }
}

export { rentReducer };
