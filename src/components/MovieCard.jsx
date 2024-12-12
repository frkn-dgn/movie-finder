import React from "react";

const MovieCard = ({ movie, onAddToWatchlist, onMovieClick }) => {
  return (
    <div className="movie-card" onClick={() => onMovieClick(movie.imdbID)}>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onAddToWatchlist(movie);
        }}
      >
        Add to Watchlist
      </button>
    </div>
  );
};

export default MovieCard;
