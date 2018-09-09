import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      username:'',
      password:''
    }
  }
  updateUsername=(event)=>{
    this.setState({username:event.target.value})
  }
  updatePassword=(event)=>{
    this.setState({password:event.target.value})
  }
  alertLogin=()=>{
    alert(
      `Username:${this.state.username} Password:${this.state.password}`
    )
  }
  render() {
    return (
      <div className="App">
        <input placeholder="username" onChange={event=>this.updateUsername(event)}></input>
        <input placeholder="password" onChange={event=>this.updatePassword(event)}></input>
        <button onClick={this.alertLogin}>Login</button>
      </div>
    );
  }
}

export default App;
