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
        App
        <SearchLocation/>
        <Miles/>
        <Location/>
        <List/>
        <Map/>
      </div>
    );
  }
};

export default App;
