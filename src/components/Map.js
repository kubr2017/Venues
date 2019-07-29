import React, { Component } from 'react';
import { getGoogleMaps } from '../api/GoogleConnection';
import { initMap } from '../api/GoogleConnection';

// const window.initMap = initMap;

class Map extends Component {




  componentWillMount(){
    console.log('come in WillMount()')

    getGoogleMaps();
  }

  componentDidMount(){
    console.log('Come in DidMount()')

    window.initMap = () => {
      console.log('Come in initMap');

      console.log('Google:',window.google);
      var map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: this.props.neighborhood.location,
        mapTypeControl: false
      })
      window.map = map;
    }
  }

  render(){

    return (
      <div className="Map">
        Map
        <div id='map'>
        </div>
      </div>
    );
  }
};

export default Map;
