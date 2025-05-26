import React from 'react';
import MovieCard from './MovieCard';

function MovieGrid({ movies, onSelect }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={() => onSelect(movie)} />
      ))}
    </div>
  );
}

export default MovieGrid;
