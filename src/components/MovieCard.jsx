import React from 'react';

function MovieCard({ movie, onClick }) {
  return (
    <div className="movie-card" onClick={onClick}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="overlay">
        <span>{movie.title}</span>
      </div>
    </div>
  );
}

export default MovieCard;
