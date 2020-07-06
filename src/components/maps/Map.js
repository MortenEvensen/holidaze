import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import HotelDetail from "./../hotels/HotelDetail";

const AnyReactComponent = ({ text }) => <div>This is text</div>;


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 19.33
    },
    zoom: 11
  };

  render() {
    return (
     
      <div style={{ height: '600px', width: '600px', margin: "0 auto" }}>
        <GoogleMapReact
    bootstrapURLKeys={{ key: "AIzaSyA67fblkScQvjED7BbknH8xOOvLHs7Ibdk" }}
  defaultCenter={this.props.center}
  defaultZoom={this.props.zoom}
  yesIWantToUseGoogleMapApiInternals
  
>
  <AnyReactComponent
    lat={59.955413}
    lng={30.337844}
    text="My Marker"
  />
</GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;