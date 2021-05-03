import React, { Component } from "react";

export default class Maneger extends Component{
  constructor(){
    super();

    //initialize the state object
    this.state={
      message:"WELCOME USER!!!",
       message1:"thanks for visiting",
       values:"login",
       value:"log out"
    }
  }

  changeMessage=()=>{
    this.setState({
      message:this.state.message1,
      message1:this.state.message,
      values:this.state.value,
      value:this.state.values,
    
    })
   
  }




  render() {
    return(
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={()=>this.changeMessage()}>{this.state.value}</button>
        
        
      </div>
    )
  }
}