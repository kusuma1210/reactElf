import React, { Component } from 'react';

export default class Maneger extends Component {
  constructor(){
    super();
    this.state={
      maneger:"siri",
      yoe:15,
      place:"America"
    }
  }

    // changeYOE=()=>{
    // this.setState({yoe:20})
    //  }

    //  changeManeger=()=>{
    //   this.setState({maneger:"Alexa"})
    //    }

       changeYop=()=>{
        this.setState({yoe:20,maneger:"alexa"})
         }

  render() {
    return (
      <div>
         <h2>{this.state.maneger}</h2>
        <button onClick={this.changeYop}>click for message</button>

        <h2>{this.state.yoe}</h2>
        <button onClick={this.changeYOE}>click for message</button>

        <h2>{this.state.yof}</h2>
        <button onClick={this.changeYop}>click for message</button>

        <h2>{this.state.place}</h2>
      </div>
    )
  }
}


