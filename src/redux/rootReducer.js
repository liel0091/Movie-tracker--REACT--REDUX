import { combineReducers } from "redux";
import watchedMovieReducer from "./watchedList/watchedListReducer";
import movieListReducer from "./listMovie/listMovieReducer";

const rootReducer = combineReducers({
  watchedMovies: watchedMovieReducer,
  movielist: movieListReducer
});

export default rootReducer;
