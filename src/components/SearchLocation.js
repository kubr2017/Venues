import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../actions';
import { getVenuesDetails } from '../actions';
import { resetVenues } from '../actions';

class SearchLocation extends Component {

  renderAutocomplete = () => {

    console.log('in renderAutocomplete, condition:',(Object.entries(this.props.googleObject).length === 0 && this.props.googleObject.constructor === Object));
    if(!(Object.entries(this.props.googleObject).length === 0 && this.props.googleObject.constructor === Object)){
      let googleObject = this.props.googleObject;
      console.log('in renderAutocomplete, in IF statement, googleObject:',googleObject);
      let input = document.getElementById('searchInput');
      var autoComplete = new googleObject.maps.places.Autocomplete(input);

      if (!this.props.areaObject.location){
        var geocoder = new googleObject.maps.Geocoder();
        geocoder.geocode( { location:{lat:40.7830603,lng:-73.971248}}, (results, status) => {
        if (status == googleObject.maps.GeocoderStatus.OK){
            var defaultArea = {
              name: 'Manhattan',
              location: results[0].geometry.location
            }
          }
          this.props.getLocation(defaultArea);//set up map
          this.props.getVenuesDetails(this.props.location.lat()+','+this.props.location.lng());
        })
      }

      autoComplete.addListener('place_changed',() => {
        var place = autoComplete.getPlace()
        if (place.geometry){
          console.log('in autoComplete - Place:',place.name);
          let area = {
            name:place.name,
            location:place.geometry.location
          }
          console.log('AREA:',area);
          this.props.getLocation(area);
          console.log('From state:',this.props.areaObject);
          this.props.resetVenues();
          this.props.getVenuesDetails(this.props.location.lat()+','+this.props.location.lng());

        }
        else {
          console.log('no such place!!!');
        }
      })
    }
  }

  render(){
    console.log('in SearchLocation, in render');
    this.renderAutocomplete();
    return(
      <div className='SearchLocation'>
        SearchLocation
        <div><input id='searchInput' placeholder='Type name of area, address, zip code or some places' size="50"/></div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return { googleObject:state.googleObject,
           areaObject:state.areaObject,
           location:state.areaObject.location}
}

export default connect(mapStateToProps,{ getLocation, getVenuesDetails, resetVenues })(SearchLocation);
