// src/jsx/components/MovieView.jsx

import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const MovieView = ({ movies }) => {
  const { id } = useParams(); // Get the movie ID from the URL
  const history = useHistory();
  
  const movie = movies.find((m) => m.id === parseInt(id)); // Find the movie by ID
  
  if (!movie) {
    return <p>Movie not found!</p>;
  }

  const handleBackClick = () => {
    history.push('/'); // Go back to MainView
  };

  return (
    <div className="movie-view">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <img src={movie.poster} alt={movie.title} />
      <p>Director: {movie.director}</p>
      <p>Genre: {movie.genre}</p>
      <button onClick={handleBackClick}>Back to Main</button>
    </div>
  );
};

export default MovieView;
