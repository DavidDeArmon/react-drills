import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      userInput:''
    }
  }

  handleChange =(userInput)=>{
    this.setState({userInput:userInput.target.value})
  }

  render() {
    return (
      <div className="App">
        <input onChange={(event)=>this.handleChange(event)}/>
        <h1>{(this.state.userInput)}</h1>
      </div>
    );
  }
}

export default App;
