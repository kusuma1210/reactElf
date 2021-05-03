import React, { Component } from 'react'

export default class ReactUpdating extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       food:"Masala Dosa"
    }
  }

 
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        food:"chicken Biriyani"
      })
    }, 3000);
  }

  shouldComponentUpdate(){
    return true;
  }


  
  render() {
    return (
      <div>
       <h2>Food Name:{this.state.food}</h2> 
      </div>
    )
  }
}
