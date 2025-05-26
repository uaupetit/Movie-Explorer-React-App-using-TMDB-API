import React, { useState } from 'react';

function SearchBar({ query, onSearch, suggestions, onSuggestionClick }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setSelectedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      onSuggestionClick(suggestions[selectedIndex]);
      setSelectedIndex(-1);
    }
  };

  return (
    <div className="search-bar">
      <h2
        className="site-title"
        onClick={() => window.location.reload()}
        style={{ cursor: 'pointer' }}
      >
        Movie Explorer
      </h2>
      <input
        type="text"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for a movie..."
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((movie, index) => (
            <li
              key={movie.id}
              onClick={() => {
                console.log('Clicked suggestion:', movie.title); // ← test
                onSuggestionClick(movie);
              }}
              className={index === selectedIndex ? 'active' : ''}
            >
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
