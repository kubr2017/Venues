import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVenues } from '../actions';
import {FourSquareClient_id} from '../api/keys';
import {FourSquareClient_secret} from '../api/keys';

class Venues extends Component {

  componentDidMount(){
  }
  renderVenues(){
    console.log('in renderVenues');
    const parameters = {
      client_id:FourSquareClient_id,
      client_secret:FourSquareClient_secret,
      ll:'40.6947591,-73.9950086',
      query:'restaurant,pizza',
      radius:500,
      limit:2,
      v:'20182507'
    }
    this.props.getVenues(parameters);
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
  return {location:state.areaObject.location};
}
export default connect (mapStateToProps,{ getVenues })(Venues);
