import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import movieReducer from "./movieReducer";

const rootReducers = combineReducers({
  movie: movieReducer,
  favorite: favoritesReducer,
});

export default rootReducers;
