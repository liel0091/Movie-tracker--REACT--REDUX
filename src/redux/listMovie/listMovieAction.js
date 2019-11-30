import { ADD_MOVIE, DElETE_MOVIE } from "./listMovieType"; 

export const addMovie = movie => {
  return {
    type: ADD_MOVIE,
    payload: movie
  };
};

export const deleteMovie = movie => {
  return {
    type: DElETE_MOVIE,
    payload: movie
  };
};
