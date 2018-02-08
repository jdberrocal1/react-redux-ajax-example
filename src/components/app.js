import React, { Component } from 'react';

import SearchBar from '../container/search-bar.container';
import WeatherList from '../container/weather-list.container';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar /> 
        <WeatherList />
      </div>
    );
  }
}
