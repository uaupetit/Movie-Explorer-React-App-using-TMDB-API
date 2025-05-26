import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieGrid from './components/MovieGrid';
import MoviePopup from './components/MoviePopup';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [page, setPage] = useState(1);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    if (!isSearchMode) {
      axios
        .get(`${BASE_URL}/movie/popular`, {
          params: { api_key: API_KEY, language: 'en-US', page },
        })
        .then(res => {
          setMovies(prev => {
            const ids = new Set(prev.map(m => m.id));
            const newMovies = res.data.results.filter(m => !ids.has(m.id));
            return [...prev, ...newMovies];
          });
        })
        .catch(err => console.error(err));
    }
  }, [API_KEY, isSearchMode, page]);
  

  const handleSearch = async (q) => {
    setQuery(q);
    setSuggestions([]);

    if (q.trim() === '') {
      setIsSearchMode(false);
      return;
    }

    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: { api_key: API_KEY, query: q, language: 'en-US' },
      });
      setSuggestions(response.data.results.slice(0, 5));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSuggestionClick = async (movie) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${movie.id}`, {
        params: { api_key: API_KEY, language: 'en-US' },
      });

      const fullMovie = response.data;
      setMovies([fullMovie]);
      setSuggestions([]);
      setIsSearchMode(true);
      setPage(1);
      setQuery('');
    } catch (err) {
      console.error('Error fetching movie details:', err);
    }
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const closePopup = () => setSelectedMovie(null);

  return (
    <div className="app">
      <SearchBar
        query={query}
        onSearch={handleSearch}
        suggestions={suggestions}
        onSuggestionClick={handleSuggestionClick}
      />
      <h2 className="section-title">{isSearchMode ? 'Search Result' : 'Popular Movies'}</h2>
      <MovieGrid movies={movies} onSelect={handleSelectMovie} />
      {!isSearchMode && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={handleLoadMore} className="load-more-btn">
            Load More
          </button>
        </div>
      )}
      {selectedMovie && <MoviePopup movie={selectedMovie} onClose={closePopup} />}
    </div>
  );
}

export default App;
