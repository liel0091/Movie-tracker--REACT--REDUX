import { ADD_WATCHED_MOVIE } from "./watchedListType";

const initMovieList = {
  numWatchedMovies: 0,
  watchedMoviesList: []
};

const watchedMovieReducer = (state = initMovieList, action) => {
  localStorage.setItem("watched", JSON.stringify(state.watchedMoviesList));

  switch (action.type) {
    case ADD_WATCHED_MOVIE:
      return {
        numWatchedMovies: state.numWatchedMovies + 1,
        watchedMoviesList: [...state.watchedMoviesList, action.payload]
      };
    default:
      return state;
  }
};

export default watchedMovieReducer;
