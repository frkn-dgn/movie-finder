import React from "react";

const MovieDetails = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="close-btn">
          X
        </button>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Title}</h2>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
