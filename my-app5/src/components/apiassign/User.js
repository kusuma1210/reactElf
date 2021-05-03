import React, { Component } from 'react'
import api from "src\components\apiassign\api.js"

export default class User extends Component {
  state={

    person:""
  }
async componentDidMount(){
  const url="api";
  const response=await fetch(url);
  const data=await response.json();
   this.setState({
     person:data.results[0],
     
   })

  console.log("user data",data);
}





  render() {
    return (
      <div>
        
        

         
          <div>{this.state.person.name.first}</div>
          <div>{this.state.person.name.last}</div>
          <img src={this.state.person.picture.large}/>

        
        <form>
          <input type="text" name="name"/>
          <button onClick={handleClick}>click</button>
        </form>
        
      </div>
    )

  }
}
