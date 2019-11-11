import { SET_FLAT_TO_FAV_LIST } from "../actions/RentActions";

const initialState = {
  favoriteFlats: []
};

function rentReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FLAT_TO_FAV_LIST:
      return {
        ...state,
        favoriteFlats: [...state.favoriteFlats, action.payload]
      };
    default:
      return state;
  }
}

export { rentReducer };
