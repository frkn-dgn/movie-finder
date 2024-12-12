import React from "react";

const Watchlist = ({ movies, onRemoveFromWatchlist }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Your Watchlist</h2>
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <button onClick={() => onRemoveFromWatchlist(movie.imdbID)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Your watchlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
