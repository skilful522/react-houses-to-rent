import { searchReducer } from "./search";
import { appReducer } from "./app.js";
import { rentReducer } from "./rent";
import { favListReducer } from "./favList";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  search: searchReducer,
  app: appReducer,
  rent: rentReducer,
  favList: favListReducer
});

export { rootReducer };
