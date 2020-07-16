import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '30%',
  height: '50%'
};

function Maps({ google, lat, lng}) {


    return (
    <>
      <Map
      	
        google={google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
         lat: lat,
         lng: lng
        }}
      />
      
       
       </>
    );
  }


export default GoogleApiWrapper({
  apiKey: 'AIzaSyA67fblkScQvjED7BbknH8xOOvLHs7Ibdk'
})(Maps);