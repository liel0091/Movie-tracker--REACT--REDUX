import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { addMovie } from "../redux";
import { Alert } from "react-bootstrap";

function MovieList() {
  const movielist = useSelector(state => state.movielist);
  const dispatch = useDispatch();
  let theList = movielist.moviesList;  

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=man&apikey=4a3b711b`)
      .then(res => res.json())
      .then(jsonRes => {  
        renderData(jsonRes.Search) 
      })
      .catch(err => {
        console.log("An error has occured : " + err.message);
      });
  }, []);

  const renderData = data => {
    data.forEach(m => {
      dispatch(addMovie(m));
    });
  };  

  return (
    <>
      <div>
        <hr />
        <h5>Watchlist :</h5>
      </div> 
      <div className="d-flex flex-wrap justify-content-between mb-4">
        {
          theList.length ? 
            theList.map((movie, index) => (
              <MovieCard key={index} movieData={movie} disable={false} />
            ))
            : <Alert variant='primary' className="col-12">
                'No movies available at the moment!'
              </Alert>
        }
      </div>
    </>
  );
}

export default MovieList;
