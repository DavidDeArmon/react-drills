import React, { Component } from 'react';
import './App.css';
import Image from './image.js';
import imageOne from './image.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image myImage={imageOne}/>
      </div>
    );
  }
}

export default App;
