import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleAPIkey } from '../api/keys';
import { getGoogleMaps } from '../api/GoogleConnection';
import { initMap } from '../api/GoogleConnection';
import { getGoogle } from '../actions/index';

class Map extends Component {

  componentDidMount(){
    this.props.getGoogle();
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
