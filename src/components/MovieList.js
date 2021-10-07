import MovieCard from "./MovieCard";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
const MovieList = ({ movies }) => {
  const [searchtitle, setsearchtitle] = useState("");
  const [rating, setrating] = useState(0);
  return (
    <Container>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setsearchtitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Search by rating"
        onChange={(e) => setrating(e.target.value)}
      />
      <Row className="g-4">
        {rating !== 0 && searchtitle === ""
          ? movies
              .filter((movie) => movie.rating.toString() === rating.toString())
              .map((movie) => <MovieCard key={Math.random()} movie={movie} />)
          : rating === 0 && searchtitle !== ""
          ? movies
              .filter((movie) =>
                movie.title.toLowerCase().includes(searchtitle.toLowerCase())
              )
              .map((movie) => <MovieCard key={Math.random()} movie={movie} />)
          : rating !== 0 && searchtitle !== ""
          ? movies
              .filter(
                (movie) =>
                  movie.title
                    .toLowerCase()
                    .includes(searchtitle.toLowerCase()) &&
                  movie.rating.toString() === rating.toString()
              )
              .map((movie) => <MovieCard key={Math.random()} movie={movie} />)
          : movies.map((movie) => (
              <MovieCard key={Math.random()} movie={movie} />
            ))}
      </Row>
    </Container>
  );
};

export default MovieList;
