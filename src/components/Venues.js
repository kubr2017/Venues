import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVenues } from '../actions';
import { getDetails } from '../actions';
import { getVenuesDetails } from '../actions';

class Venues extends Component {

  renderVenues(){
    console.log('in renderVenues');

    // this.props.getVenues();
    // const Id='4aad3536f964a520035f20e3'
    //
    // this.props.getDetails(Id);

    this.props.getVenuesDetails();
    console.log('in <Venues/> props:',this.props);

  }

  render(){
    this.renderVenues();
    return (
      <div className="Venues">
        Venues
      </div>
    );
  }
};
const mapStateToProps = state => {
  return {location:state.areaObject.location,
          venuesDetails:state.venueDetailsReducer};
}
export default connect (mapStateToProps,{ getVenues, getDetails, getVenuesDetails })(Venues);
