import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleAPIkey } from '../api/keys';
import { getGoogleMaps } from '../api/GoogleConnection';
// import { initMap } from '../api/GoogleConnection';


class Map extends Component {

  componentDidMount(){
    // console.log('inside DidMount()');
  }

  renderMap = (location) => {
    // console.log('inside renderMap this.props.googleObject', this.props.googleObject);
    if(!(Object.entries(this.props.googleObject).length === 0 && this.props.googleObject.constructor === Object)){
      let googleObject = this.props.googleObject;
      // console.log('inside check condition empty googleObject', googleObject);
      var map = new googleObject.Map(document.getElementById('map'), {
        zoom: 15,
        center: location,
        mapTypeControl: false
      })
    }

  }

  render(){
    // Condition to check location is loaded
    if(this.props.location){
      this.renderMap(this.props.location)
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
           location:state.areaObject.location}
}
export default connect(mapStateToProps)(Map);
