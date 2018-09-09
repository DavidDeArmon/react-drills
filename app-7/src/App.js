import React, { Component } from 'react';
import './App.css';
import NewTask from './NewTask'
import List from './List.js'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      toDoList:[]
    }
  }
  handleAddTask=(task)=>{
    this.setState({toDoList:[...this.state.toDoList,task]})
  }
  render() {
    return (
      <div className="App">
        <h1>To-Do List Too</h1>
        <NewTask AddTask = {this.handleAddTask}/>
        <List myToDo={this.state.toDoList}/>   
      </div>
    );
  }
}

export default App;
