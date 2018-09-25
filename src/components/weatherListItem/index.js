import React from 'react';
import GoogleMap from '../googleMap';
import WeatherChart from '../weatherChart';

export default (props) => {
    return (
        <tr>
            <td><GoogleMap lat={props.data.lat} lng={props.data.lon}/></td>
            <td><WeatherChart data={props.data.temps} color="red" unit="K"/></td>
            <td><WeatherChart data={props.data.pressures} color="blue" unit="hPa"/></td>
            <td><WeatherChart data={props.data.humidities} color="green" unit="%"/></td>
        </tr>
    );
}