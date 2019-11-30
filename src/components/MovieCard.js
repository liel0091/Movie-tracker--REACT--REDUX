import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { addWatchedMovie, deleteMovie } from "../redux";

function MovieCard(props) {
  const movie = props.movieData;
  const dispatch = useDispatch(); 

  function handelDispatch(movie){
    dispatch(addWatchedMovie(movie))
    dispatch(deleteMovie(movie))
  }

  return (
    <Card xs={12} sm={6} md={3} className="mt-4" style={{ maxWidth: "300px" }}>
      <Card.Img
        alt="card-Img"
        style={{ height: "200px" }}
        variant="top"
        src={movie.Poster}
      />
      <Card.Header>{movie.Title}</Card.Header>
      <Card.Body>
        <Card.Text>
          <label>Year: </label>
          <small className="font-weight-bold"> {movie.Year}</small>
          <br />
          <label>Type: </label>
          <small className="font-weight-bold"> {movie.Type}</small>
        </Card.Text>
        <Button
          disabled={props.disable}
          variant="primary"
          value="x"
          onClick={() => handelDispatch(movie)}
        >
          Mark movie as Watched
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
