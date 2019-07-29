import React from 'react';
import { GoogleAPIkey } from './keys';

export const getGoogleMaps = () => {
      // Load the Google Maps API
      console.log('Come in getGoogleMaps');
      console.log('Contex this:',this);
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GoogleAPIkey}&v=3&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      // window.initMap = initMap;
}


export const initMap = () => {
  console.log('Come in initMap');
  var map = new window.google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat:40.6947591, lng:-73.9950086},
    mapTypeControl: false
  })
  window.map = map;
}
