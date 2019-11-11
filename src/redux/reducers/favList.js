import { APP_ACTIONS } from "../actionTypes/actionTypes";

const initialState = {
  favoriteFlats: []
};

function favListReducer(state = initialState, action) {
  switch (action.type) {
    case APP_ACTIONS.REMOVE_FLAT_FROM_FAV_LIST:
      return {
        ...state,
        favoriteFlats: state.favoriteFlats.filter(
          flat => action.payload !== flat
        )
      };
    default:
      return state;
  }
}

export { favListReducer };
