import React, { Component } from 'react';
import '../App.css';
import SearchLocation from './SearchLocation';
import Miles from './Miles';
import Location from './Location';

class App extends Component {

  render(){
    return (
      <div className="App">
        App
        <SearchLocation/>
        <Miles/>
        <Location/>
      </div>
    );
  }
};

export default App;
