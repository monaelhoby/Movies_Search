import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MovieSearch from './containers/MovieSearch/MovieSearch.js'

class App extends Component {
  render() {
    return (
      <div>
      <MovieSearch />
      </div>
    );
  }
}

export default App;
