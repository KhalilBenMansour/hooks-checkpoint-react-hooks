import "./App.css";
import Header from "./components/header/Header";
import MovieList from "./components/MovieList";
import { useState } from "react";
import React from "react";
import AddMovie from "./components/AddMovie";
function App() {
  const [movies, setmovies] = useState([
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX674_.jpg",
      rating: 9.3,
    },
    {
      title: "The Godfather",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
      rating: 9.2,
    },
    {
      title: "The Godfather: Part II",
      description:
        "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
      rating: 9.0,
    },
  ]);
  const addMovie = (movie) => {
    setmovies([...movies, movie]);
  };

  return (
    <div className="App bg-primary">
      <Header />
      <MovieList movies={movies} />
      <AddMovie onAdd={addMovie} />
    </div>
  );
}

export default App;
