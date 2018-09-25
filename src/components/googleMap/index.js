import { Component } from 'react';
import Template from './template';

export default class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            }
        });
    }

    render() {
        return Template.call(this);
    }
}
