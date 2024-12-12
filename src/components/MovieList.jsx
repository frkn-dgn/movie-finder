import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onAddToWatchlist, onMovieClick }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onAddToWatchlist={onAddToWatchlist}
            onMovieClick={onMovieClick}
          />
        ))
      ) : (
        <p>
          No movies found. Try searching with a different keyword or filter.
        </p>
      )}
    </div>
  );
};

export default MovieList;
