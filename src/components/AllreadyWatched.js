import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function AllreadyWatched() {
  const WatchedMovies = useSelector(state => state.watchedMovies);
  const movieList = WatchedMovies.watchedMoviesList;

  return (
    <Fragment>
      <hr/>
      <h5>AllreadyWatched : </h5> 
      <small className="font-weight-bold">
        Number of Watched Movies: {WatchedMovies.numWatchedMovies}
      </small>
      <div className="d-flex flex-wrap justify-content-between mb-4">
        {movieList.map((movie, index) => (
          <MovieCard key={index} movieData={movie} disable={true} />
        ))}
      </div>
    </Fragment>
  );
}

export default AllreadyWatched;
