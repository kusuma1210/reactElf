import React, { Component } from 'react'

export default class Mounting extends Component {

constructor(props) {
  super(props)

  this.state = {
     subject:"React JS"
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
    subject:"java"
  
  })
},3000)
}



  render(){
  return(
    <div>subject name is:{this.state.subject}</div>
  )
  }
}
