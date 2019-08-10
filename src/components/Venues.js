import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVenues } from '../actions';
import { getDetails } from '../actions';
import { getVenuesDetails } from '../actions';

class Venues extends Component {

  renderVenues() {
    console.log('in renderVenues');
    if(this.props.location) {
      console.log('lat:',this.props.location.lat(),' lng:',this.props.location.lng());
      console.log('in <Venues/> props:',this.props);
      console.log('venuesDEtails parse:',this.props.venuesDetails.map((venue)=>(venue.data.response.venue)));
      // return this.props.venuesDetails.map((venue)=>(venue.data.response.venue).map((venue)=>(returnCard()));
    }
  }



  renderCard(){
    return(
      <div className='Venues-card'>
        <div className = 'Venues-card-head'>
          <div className = 'Venues-card-head-name'>
          name
          </div>
          <div className = 'Venues-card-head-rate'>
          rate
          </div>
        </div>
        <div className = 'Venues-card-details'>
          <div className = 'Venues-card-details-pic'>
          pic
          </div>
          <div className = 'Venues-card-details-menu'>
          menu
          </div>
          <div className = 'Venues-card-details-time'>
          time
          </div>
          <div className = 'Venues-card-details-address'>
          address
          </div>
        </div>
      </div>
    )

  }


  render(){


    return (
      <div className="Venues">
        Venues
        {this.renderCard()}
        {this.renderVenues()}
      </div>
    );
  }
};
const mapStateToProps = state => {
  return {location:state.areaObject.location,
          venuesDetails:state.venuesDetails};
}
export default connect (mapStateToProps,{ getVenues, getDetails, getVenuesDetails })(Venues);
