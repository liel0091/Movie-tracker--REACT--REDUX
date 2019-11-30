import { ADD_WATCHED_MOVIE } from "./watchedListType";

export const addWatchedMovie = movie => {
  return {
    type: ADD_WATCHED_MOVIE,
    payload: movie
  };
};
