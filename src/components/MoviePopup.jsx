import React from 'react';

function MoviePopup({ movie, onClose }) {
  if (!movie) return null;

  return (
    <>
      <div className="popup-backdrop" onClick={onClose}></div>
      <div className="popup">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>{movie.title}</h2>
        <p><strong>Release:</strong> {new Date(movie.release_date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })}</p>

        <p><strong>Rating:</strong> {movie.vote_average?.toFixed(1)} / 10</p>
        <p>{movie.overview}</p>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className="popup-img"
          />
        )}
      </div>
    </>
  );
}

export default MoviePopup;
