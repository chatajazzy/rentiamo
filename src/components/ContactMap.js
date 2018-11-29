import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class ContactMap extends Component {
   render() {
    const coordinates = { 
      lat: 52.3980655, 
      lng: 16.9251764 
    }
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {coordinates}
        defaultZoom = {17}
      >
      {this.props.isMarkerShown && <Marker position={coordinates} />}

      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default ContactMap;
