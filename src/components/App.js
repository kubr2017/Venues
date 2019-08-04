import React, { Component } from 'react';
import '../App.css';
import SearchLocation from './SearchLocation';
import Miles from './Miles';
import Location from './Location';
import List from './List';
import Map from './Map';

import { connect } from 'react-redux';
import { getGoogle } from '../actions/index';

class App extends Component {

  componentDidMount(){
    this.props.getGoogle();
  }

  render(){
    return (
      <div className="App">
        <div className='App-title-box'>
          App
        </div>
        <div className='App-venues-box'>
          <div className='App-search-location-box'>
            <SearchLocation/>
            <Miles/>
          </div>
          <List/>
        </div>
        <div className='App-map-box'>
          <Location/>
          <Map/>
        </div>
      </div>);
  }
};

export default connect(null,{ getGoogle })(App);
