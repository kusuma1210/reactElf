import React, { Component } from 'react'
//the name is passed from resort to lift
//&lift to trial
//usually its time consuming
//this is called as props drilling

//step 3:additional child coponent 2
const Trial=props=>{
  <div>
    {props.name}
  </div>
}
//step 2:child component
const Lift=props=>{
  <div>
   <Trail name={props.name}/>
  </div>
}

//step 1:parent component
export default class Resort extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"snowtooth mountain "
    }
  }
  
  render() {
    return (
      <div>
        <Lift name={this.state.name}/>
      </div>
    )
  }
}
