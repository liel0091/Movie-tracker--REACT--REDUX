import React, { Fragment } from "react";
import Nav from "./components/Nav";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";
import AllreadyWatched from "./components/AllreadyWatched";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Nav />
        <Container className="d-flex flex-column justify-content-center">
          <h3 className="font-weight-bold">Add movie!</h3>
          <MovieForm />
          <MovieList />
          <AllreadyWatched />
        </Container>
      </Provider> 
    </Fragment>
  );
} 

export default App;
