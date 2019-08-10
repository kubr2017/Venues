import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVenues } from '../actions';
import { getDetails } from '../actions';
import { getVenuesDetails } from '../actions';

class Venues extends Component {


  first = {name:'firstName'}

  renderVenues() {
    console.log('in renderVenues');
    if(this.props.venuesDetails.length) {
      //console.log('lat:',this.props.location.lat(),' lng:',this.props.location.lng());
      //console.log('in <Venues/> props:',this.props);
      //console.log('venuesDEtails parse:',this.props.venuesDetails.map((venue)=>(this.renderCard(venue.data.response.venue))));
      return this.props.venuesDetails.map((venue)=>(this.renderCard(venue.data.response.venue)));
    }
    else {
      return <div>Loading...</div>
    }
  }



  renderCard(venue){
    return(
      <div className='Venues-card' key={venue.id}>
        <div className = 'Venues-card-head'>
          <span className = 'Venues-card-head-name'>
          {venue.name}
          </span>
          <span className = 'Venues-card-head-rate'>
            {venue.rating?`Rate=${venue.rating}`:'No rate'}
          </span>
        </div>
        <hr/>
        <div className = 'Venues-card-details'>
          <div className = 'Venues-card-details-pic'>
            <img src={venue.photos.groups[1]?venue.photos.groups[1].items[0].prefix+'75x75'+venue.photos.groups[1].items[0].suffix: require('../images/NoPic.png')}/>
          {/*<img src={require('../images/NoPic.png')}/>*/}
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
