import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      person:""
    }
  }
  componentDidMount(){
    axios.get("https://swapi.co/api/people/4").then(response=>{
      this.setState({
        person:response.data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <h2>Name:{this.state.person.name}</h2>
        <h2>Birth Year:{this.state.person.birth_year}</h2>
        <h2>Height:{this.state.person.height}</h2>
        <h2>Eye Color:{this.state.person.eye_color}</h2>
      </div>
    );
  }
}

export default App;
