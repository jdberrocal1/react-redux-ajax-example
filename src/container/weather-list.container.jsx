import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import Map from '../components/map';

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  renderWeather(cityData){
    const temps = cityData.list.map(weather => weather.main.temp);
    const press = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={cityData.city.id}>
        <td><Map lat={cityData.city.coord.lat} lon={cityData.city.coord.lon}/></td>
        <td><Chart data={temps} color="red" units="K"/></td>
        <td><Chart data={press} color="blue" units="hPa"/></td>
        <td><Chart data={humidity} color="green" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);