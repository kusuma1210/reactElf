// import React, { Component } from 'react'

// export default class Errorboundry extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        hasError:false
//     }
//   }

//   static getDerivedStateFromError(error){
//     return {
//       hasError:true
//     }
//   }

//   componentDidCatch(error,errorInfo){
//     console.log(error);
//     console.log(errorInfo);
//   }
  
//   render() {
//     if(this.state.hasError){
//       return<h3>something went wrong!!</h3>
//     }
//     else{
//       return this.props.children
//     }
   
//   }
// }
