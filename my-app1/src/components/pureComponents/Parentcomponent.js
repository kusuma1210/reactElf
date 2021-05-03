import React, { Component } from 'react'
import Purecomponents from './Purecomponents'
import Regularcomponents from './Regularcomponents'

export default class Parentcomponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name:"pranav"
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({name:"praveen"})

    },3000)
  }
  
  //regular component
  //pure component
  render() {
    return (
      <div>
        {/* sending a nama as aprops for regular and pure component  */}
        <Regularcomponents names={this.state.name}/>
        <Purecomponents names={this.state.name}/>
      </div>
    )
  }
}
