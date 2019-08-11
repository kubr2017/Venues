import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleAPIkey } from '../api/keys';
import { getGoogleMaps } from '../api/GoogleConnection';
// import { initMap } from '../api/GoogleConnection';


class Map extends Component {

  componentDidMount(){
    // console.log('inside DidMount()');
  }

  markers = [];
  map = {};

  // Render map
  renderMap = (location) => {
    // console.log('inside renderMap this.props.googleObject', this.props.googleObject);
    if(!(Object.entries(this.props.googleObject).length === 0 && this.props.googleObject.constructor === Object)){
      var googleObject = this.props.googleObject;
      // console.log('inside check condition empty googleObject', googleObject);
      this.map = new googleObject.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: location,
        mapTypeControl: false
      })
    }

  }

  //Create single marker
  createMarker = (venue) => {
    let location = {lat:venue.location.lat,
                    lng:venue.location.lng};
                    console.log('in render marker - location:',location);
    let marker = new window.google.maps.Marker({
        position:location,
        map: this.map,
        title: venue.name
      });

      this.markers.push(marker);
  }

  // Render all markers through loop
  renderMarkers = () => {
    if (!(Object.entries(this.props.venues).length === 0 && this.props.venues.constructor === Object)){
      this.props.venues.data.response.venues.map((venue)=>(this.createMarker(venue)))
      this.markers.map((marker)=>(console.log('marker:',marker)));
    }
  }

  render(){
    // Condition to check location is loaded
    if(this.props.location){
      this.renderMap(this.props.location)
      this.renderMarkers();
    }

    return (

      <div className="Map">
        <div id="map">Loading...</div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { googleObject:state.googleObject,
           location:state.areaObject.location,
           venues:state.venuesReducer}
}
export default connect(mapStateToProps)(Map);
