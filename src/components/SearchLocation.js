import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../actions';

class SearchLocation extends Component {

  // componentDidMount(){
  //   //set uo default area
  //   let area = {
  //     name:'Manhattan',
  //     location:{lat:40.7830603,lng:-73.971248}
  //   }
  //   this.props.getLocation(area);
  // }

  renderAutocomplete = () => {

    console.log('in renderAutocomplete, condition:',(Object.entries(this.props.googleObject).length === 0 && this.props.googleObject.constructor === Object));
    if(!(Object.entries(this.props.googleObject).length === 0 && this.props.googleObject.constructor === Object)){
      let googleObject = this.props.googleObject;
      console.log('in renderAutocomplete, in IF statement, googleObject:',googleObject);
      let input = document.getElementById('searchInput');
      var autoComplete = new googleObject.places.Autocomplete(input);
      //set up default location
      // let defaultPlace = autoComplete.getPlace('Manhattan, NY, USA');
      // let defaultArea = {
      //   name: defaultPlace.name,
      //   location: defaultPlace.geometry.location
      // }
      // this.props.getLocation(defaultArea);
      if (!this.props.areaObject.location){
        var geocoder = new googleObject.Geocoder();
        geocoder.geocode( { location:{lat:40.7830603,lng:-73.971248}}, (results, status) => {
        if (status == googleObject.GeocoderStatus.OK)
          {
        // do something with the geocoded result
        //
        // results[0].geometry.location.latitude
        // results[0].geometry.location.longitude
            var defaultArea = {
              name: 'Manhattan',
              location: results[0].geometry.location
            }
          }  
          this.props.getLocation(defaultArea);
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
        <div><input id='searchInput' placeholder='Type name of area, address, zip code or some places'/></div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return { googleObject:state.googleObject,
           areaObject:state.areaObject}
}

export default connect(mapStateToProps,{ getLocation })(SearchLocation);
