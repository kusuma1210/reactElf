import React, { Component } from 'react'

export default class Sweet extends Component {

constructor(props) {
  super(props)

  this.state = {
    sweet:"Gulab jamun"
     
  }
}

shouldComponentUpdate(){
  return true;
}

 changeSweet=()=>{
   this.setState({
     sweet:"champakali"
   })
 }


  render() {
    return (
      <div>
        <h2>sweet name:{this.state.sweet}</h2>
        <button onClick={this.changeSweet}>cick to change</button>
      </div>
    )
  }
}
