import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainView from './components/MainView';
import MovieView from './components/MovieView';
import { movies } from './data/mockData'; // Import mock data

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* Route for MainView */}
          <Route exact path="/" component={MainView} />

          {/* Route for MovieView with dynamic movie ID */}
          <Route
            path="/movie/:id"
            render={(props) => <MovieView {...props} movies={movies} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
