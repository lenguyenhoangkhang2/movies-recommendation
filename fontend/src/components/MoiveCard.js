import React from "react";
import { Button, Card } from "react-bootstrap";

const MovieCard = ({ movie, setShowDetail, setMovieDetailId }) => {
  return (
    <Card>
      <Card.Header>
        <h5>{movie.title}</h5>
      </Card.Header>
      <Card.Body>
        <p>
          <strong>
            Rating {movie.rating}/<small>{movie.vote_count} votes</small>
          </strong>
        </p>
        <Card.Text>{movie.tagline}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            setShowDetail(true);
            setMovieDetailId(movie.id);
          }}
        >
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
