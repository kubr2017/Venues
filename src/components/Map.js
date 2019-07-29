import React, { Component } from 'react';
import { GoogleAPIkey } from '../api/keys';
import { getGoogleMaps } from '../api/GoogleConnection'
import { initMap } from '../api/GoogleConnection'

class Map extends Component {

  componentDidMount(){
    console.log('Come in DidMount()')
    getGoogleMaps();
    window.initMap = initMap;

  }

  render(){

    return (
      <div className="Map">
        Map
        <div id="map">map</div>
      </div>
    );
  }
};

export default Map;
