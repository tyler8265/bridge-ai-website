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
        initialCenter={{ lat: 41.3644, lng: -72.0864 }}
        disableDefaultUI={true}  // Disable the default UI
      >
        {/* Add markers or other map components as needed */}
        <Marker position={{ lat: 41.3644, lng: -72.0864 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBFIWshV8LXXUoWshWkC86moK5A6eU9IRI', // Replace with your API key
})(MapComponent);
