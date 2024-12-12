import React, { useState, useEffect } from "react";
import { fetchMovies, fetchMoviesByGenre, fetchMovieDetails } from "./api/api";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Watchlist from "./components/Watchlist";
import MovieDetails from "./components/MovieDetails";
import "./styles/App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [genre, setGenre] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setError(null);
      const fetchedMovies = await fetchMovies(searchQuery);
      setMovies(fetchedMovies);
    } catch (err) {
      setError("Error fetching movies.");
    }
  };

  const handleGenreFilter = async (genre) => {
    try {
      setError(null);
      if (genre === "All") {
        const allMovies = await fetchMovies("");
        setMovies(allMovies);
      } else {
        const filteredMovies = await fetchMoviesByGenre(genre);
        setMovies(filteredMovies);
      }
    } catch (err) {
      setError("Error fetching movies by genre.");
    }
  };

  const handleMovieClick = async (movieId) => {
    try {
      const movieDetails = await fetchMovieDetails(movieId);
      setSelectedMovie(movieDetails);
    } catch (err) {
      setError("Error fetching movie details.");
    }
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    if (genre !== "All") {
      handleGenreFilter(genre);
    }
  }, [genre]);

  return (
    <div>
      <header>
        <h1>Movie Finder</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button onClick={handleSearch}>Search</button>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          id="genre-select"
        >
          <option value="All">All</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
        </select>
      </header>
      {error && <p>{error}</p>}
      <MovieList movies={movies} onMovieClick={handleMovieClick} />
      {selectedMovie && (
        <MovieDetails movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
