import React, { Component } from 'react';

 class NewTask extends Component{
    //passed in handleAddTask
    //add new task to list
    constructor(props){
        super(props)
        this.state={
            userInput:''
        }
    }
    handleChange= (event)=>{
        this.setState({userInput:event.target.value})
    }
    handleClick =()=>{
        this.props.AddTask(this.state.userInput)
    }
    render(){
        return(
            <div>
            <input onChange={this.handleChange} placeholder="Add your new task here" value={this.state.userInput}></input>
            <button onClick={this.handleClick}>Add Item!</button>
            </div>
        );
    }
}
export default NewTask