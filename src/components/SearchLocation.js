import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchLocation extends Component {

  renderAutocomplete(){
    console.log('in renderAutocomplete, condition:',(Object.entries(this.props.googleObject).length === 0 && this.props.googleObject.constructor === Object));
    if(!(Object.entries(this.props.googleObject).length === 0 && this.props.googleObject.constructor === Object)){
      let googleObject = this.props.googleObject;
      console.log('in renderAutocomplete, in IF statement, googleObject:',googleObject);
      let input = document.getElementById('searchInput');
      var autoComplete = new googleObject.places.Autocomplete(input);
    }
  }

  render(){
    console.log('in SearchLocation, in render');
    this.renderAutocomplete();
    return(
      <div className='SearchLocation'>
        SearchLocation
        <div><input id='searchInput'placeHolder='Type name of area, address, zip code or some places'/></div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return { googleObject:state.googleObject }
}

export default connect(mapStateToProps)(SearchLocation);
