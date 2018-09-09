import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      carArr:["BMW","VW","Ford","Chevy","Audi"]
    }
  }
  displayList=(ele)=>{
    let e=ele
    return(
      <div>
        <h1>{e}</h1>
      </div>
    )
  }

  render() {
    let displayArr = this.state.carArr.map(e=>this.displayList(e))
    return (
      <div>
       <h1>{displayArr}</h1>
      </div>
    );
  }
}

export default App;
