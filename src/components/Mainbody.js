import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const API_BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY_TMDB}`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_BASE_URL);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error); 
      }
    };

    fetchMovies();
  }, [API_BASE_URL]);

  return (
    <div className="movie-list">
      <h2>Welcome to Nxtseries</h2><br/>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
            />
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
