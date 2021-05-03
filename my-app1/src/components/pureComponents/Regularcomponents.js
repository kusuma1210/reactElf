import React, { Component } from 'react'

export default class Regularcomponents extends Component {
  
  render() {
    console.log("********Regular components*******");
    return (
      <div>
        <h1>Regular component<b>{this.props.names}</b></h1>
      </div>
    )


  }
}
