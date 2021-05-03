import React, { Component } from 'react'

export default class counter extends Component {
constructor(props){
  super(props)
  this.state={
    count:0
  }
}

increment(){
  // trying to change the state value direcly:it doesnot render the count value on UI
  this.state.count=this.state.count+1
  console.log(this.state.count);

  // state change using the setState
this.setState(
  {
  count:this.state.count+1
},

//setSTate() takes 2 parameters :state objects and call back function
//execution of the code after the code as been updated
()=>{
  console.log("callback value",this.state.count);
}
)
console.log("normal state value",this.state.count );

}


  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={()=>this.increment()}>click</button>
        
      </div>
    )
  }
}
