import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      currentArr:["bmw","audi","ford","chevy","vw","fiat","mercedes"],
      userInput:""
    }
  }
  handleChange=(event)=>{
    this.setState({userInput:event.target.value})
  }
  displayArr=(ele)=>{
    return(
      <div>{ele}</div>
    )
  }
  filterArr=(newArr)=>{
    let userInput=this.state.userInput

    console.log(newArr)
    console.log(userInput)
    if(userInput===""){return newArr.map(e=>this.displayArr(e))}
    else{
     let Arr= newArr.filter(e=>{
       console.log(userInput)
       return e.includes(userInput)
      })
      console.log(Arr)
      return Arr.map(e=>this.displayArr(e))
    }
  }

  render() {
    let newArr =this.state.currentArr.slice()
    return (
      <div className="App">
        <input onChange={event=>this.handleChange(event)}/>
        <h1>{this.filterArr(newArr)}</h1>
      </div>
    );
  }
}

export default App;
