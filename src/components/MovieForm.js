import React from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { addMovie } from "../redux";

function MovieForm() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form); 
    
    const newMovie = {
      Title: data.get("title"),
      Type: data.get("comment"),
      Year: data.get("year"),
      Poster: data.get("img")
    };

    dispatch(addMovie(newMovie));
  };

  return (
    <Form xs={12} sm={10} md={8} onSubmit={handleSubmit}>
      <Form.Text className="text-muted mb-4">
        Life is like a camera shot, focus on what is important and you will
        catch it perfektly.
      </Form.Text>

      <Form.Group>
        <Form.Label>TITLE:</Form.Label>
        <Form.Control
          name="title"
          className="mb-3"
          type="text"
          placeholder="Title..."
          required
        />

        <Form.Label>IMAGE URL:</Form.Label>
        <Form.Control
          name="img"
          className="mb-3"
          type="text"
          placeholder="Image URL..."
          required
        />

        <Form.Label>YEAR:</Form.Label>
        <Form.Control
          name="year"
          className="mb-3"
          type="text"
          placeholder="Year..."
          required
        />

        <Form.Label>COMMENT:</Form.Label>
        <Form.Control
          name="comment"
          className="mb-3"
          type="text"
          placeholder="Comment..."
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add a Movie
      </Button>
    </Form>
  );
}

export default MovieForm;
