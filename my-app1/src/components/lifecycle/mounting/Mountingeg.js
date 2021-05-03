import React, { Component } from 'react'

export default class Mountingeg extends Component {

constructor(props) {
  super(props)

  this.state = {
     Dress:"kurthas"
  }
}
 
// static getDerivedstaticFromProps(props,state) {
//   return{
//   subject:props.favsubject,
//   }
// }

componentDidMount(){
  setTimeout(()=>{
  this.setState({
    Dress:"jeans"
  
  })
},3000)
}



  render(){
  return(
    <div>Dress is:{this.state.Dress}</div>
  )
  }
}
