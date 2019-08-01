import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleAPIkey } from '../api/keys';
import { getGoogleMaps } from '../api/GoogleConnection';
import { initMap } from '../api/GoogleConnection';
import { getGoogle } from '../actions/index';

class Map extends Component {

  componentDidMount(){
    this.props.getGoogle();
    window.initMap = () => {
      var map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat:40.6947591, lng:-73.9950086},
        mapTypeControl: false
      })
      // ???????????????????????? Why impossible this.map  and => var window.map  ?
      window.map = map
      //console.log('inside initMap window.map:',window.map);
      //console.log('<Map/> google:',window.google);
    }
  }
  
  render(){
    console.log('From STATE googleObject:',this.props.googleObject);
    return (
      <div className="Map">
        Map
        <div id="map">map</div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { googleObject:state.googleObject}
}
export default connect(mapStateToProps,{getGoogle})(Map);
