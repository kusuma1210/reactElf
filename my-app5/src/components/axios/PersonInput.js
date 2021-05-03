import React, { Component } from 'react';
import Axios from "axios"

export default class PersonInput extends Component {
//ex1
  constructor(props) {
    super(props)
  
    this.state = {
       name:""
    }
  }
                                      //ex2
  handleChange=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  //handling the submission of form
onHandleSubmit=(e)=>{
  e.preventDefault(); //steps the browser from reloading the page

  //creating the new object
  const user = {
    name:this.state.name
  }

//adding the user object as payload
Axios.post("https://jsonplaceholder.typicode.com/users",{user})
.then((response)=>{
  console.log(response);
  console.log(response.data);

});
}

  render() {
    return (
      <div>
        <form onSubmit={this.onHandleSubmit}>
          <input type="text" name="name" onChange={this.handleChange}/>
          {/* ex3 */}
          <button type="submit">add</button>
        </form>

      </div>
    )
  }
}
