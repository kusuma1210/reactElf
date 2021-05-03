import React, { Component } from 'react'

class Unmountingeg extends Component {

constructor(props) {
  super(props)

  this.state = {
     show:true
  }
}


// to delete the Mounted Header
deleteHeader=()=>{
  this.setState({
    show:false
  })
}



  render() {
    let myHeader;
    if(this.state.show){
      myHeader=<Child/>
    }


    return (
      <div>
        {myHeader}

 <button onClick={this.deleteHeader}>Delete</button>   
  </div>
    )
  }
}

class Child extends Component{
  componentWillUnmount(){
    alert("Are u sure u want to delete statement...??")
  }
render(){
  return <h1>hii im kusuma</h1>
}
}
export default Unmountingeg;