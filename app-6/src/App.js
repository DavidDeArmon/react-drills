import React, { Component } from 'react';
import './App.css';
import DisplayList from './DisplayList';

class App extends Component {
  constructor(){
    super()
    this.state={
      userinput:'',
      toDoList:[]
    }
  }
  handleChange = (event) =>{
    this.setState({userinput:event.target.value})
    console.log(this.state.userinput)
  }
  toDo = () =>{
    this.setState({toDoList:this.state.toDoList.concat(this.state.userinput),userinput:''})
  }
  displayList(){

  }
 
  render() {
    var list = this.state.toDoList.map(e=>{
      return <DisplayList item={e}/>});

    return (
      <div className="App">
        <h1>My To-Do List!</h1>
        <input placeholder="Enter New Item" value={this.state.userinput} onChange={event=>this.handleChange(event)}/>
        <button onClick={this.toDo}>Add It!</button>
        {list}
      </div>
    );
  }
}

export default App;
