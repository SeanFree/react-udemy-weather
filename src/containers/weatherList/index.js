import React, { Component } from 'react';
import Template from './template';
import { connect } from 'react-redux';
import WeatherListItem from '../../components/weatherListItem';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const { lat, lon } = cityData.city.coord;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <WeatherListItem key={name} data={{name, lat, lon, temps, pressures, humidities}}></WeatherListItem>
        );
    }

    render() {
        return Template.call(this);
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);