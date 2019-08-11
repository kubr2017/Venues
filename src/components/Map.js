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

  renderMap = (location) => {
    // console.log('inside renderMap this.props.googleObject', this.props.googleObject);
    if(!(Object.entries(this.props.googleObject).length === 0 && this.props.googleObject.constructor === Object)){
      var googleObject = this.props.googleObject;
      // console.log('inside check condition empty googleObject', googleObject);
      var map = new googleObject.Map(document.getElementById('map'), {
        zoom: 15,
        center: location,
        mapTypeControl: false
      })
    }

  }

  createMarker = (venue) => {
    let location = {lat:venue.data.response.venue.location.lat,
                    lng:venue.data.response.venue.location.lng};
    let marker = new this.props.googleObject.Marker({
        position:location,
        map: this.map,
        title: 'title'
      });
  
  }

  renderMarkers = () => {
    if (!(Object.entries(this.props.venues).length === 0 && this.props.venues.constructor === Object)){

      this.props.venues.map((venue)=>(this.createMarker(venue)))
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
