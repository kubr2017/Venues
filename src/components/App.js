import React, { Component } from 'react';
import '../App.css';
import SearchLocation from './SearchLocation';
import Miles from './Miles';
import Location from './Location';
import List from './List';
import Map from './Map';

class App extends Component {

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

export default App;
