import React from 'react';

export default function() {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temparature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
            </thead>
            <tbody>
                {this.props.weather.map(this.renderWeather.bind(this))}
            </tbody>
        </table>
    );
}