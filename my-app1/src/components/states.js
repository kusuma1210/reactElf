import React, { Component } from "react";

export default class Message extends Component{
  constructure(){
    super();

    //initialize the state object
    this.state={
      message:"WELCOME USER!!!"
    }
  }

  changeMessage=()=>{
    this.setState({message:"thanks for visiting!!  :)"})
  }

  render(){
    return(
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.changeMessage}>click for message</button>
      </div>
    )
  }
}