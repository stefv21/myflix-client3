// src/jsx/components/MainView.jsx

import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { movies } from '../data/mockData'; // Assuming you have a mock data file with movie details

const MainView = () => {
  const [moviesList, setMoviesList] = useState(movies);

  return (
    <div className="main-view">
      <h1>MyFlix Movie Library</h1>
      <div className="movie-cards">
        {moviesList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MainView;
