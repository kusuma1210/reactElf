import React, { Component } from 'react'

class Unmounting extends Component {

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
    alert("Are u sure u want to delete header...??")
  }
render(){
  return <h1>hii im a Unmounting component</h1>
}
}
export default Unmounting;