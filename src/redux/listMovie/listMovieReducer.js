import { ADD_MOVIE , DElETE_MOVIE} from "./listMovieType"; 

const initMovieList = {
  moviesList: []
};

const movieListReducer = (state = initMovieList, action) => {
  localStorage.setItem("movies", JSON.stringify(state.moviesList)); 

  switch (action.type) {
    case ADD_MOVIE:
      return {
        moviesList: [...state.moviesList, action.payload]
      };

    case DElETE_MOVIE:
      return {  
        moviesList:  state.moviesList.filter(item => item !== action.payload)
      };
    default:
      return state;
  }
};

export default movieListReducer;
