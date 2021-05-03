import React, { Component } from 'react'

export default class Myref extends Component {
  constructor(props) {
    super(props)
    this.callRef=React.createRef();// create reff
   
  }
  handleRefs=()=>{
    this.callRef.current.focus();
  }
 
  render() {
    return (
      <div>
       <input type="text" ref={this.callRef}  placeholder="Enter your name" />  
       <button onClick={this.handleRefs}>click</button>
         </div>
    )
  }
}
