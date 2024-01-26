import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapComponent extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }} // Default center coordinates (San Francisco)
      >
        {/* Add markers or other map components as needed */}
        <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBFIWshV8LXXUoWshWkC86moK5A6eU9IRI', // Replace with your API key
})(MapComponent);
