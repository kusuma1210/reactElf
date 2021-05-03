import React, { Component } from 'react';
import Axios from "axios"

export default class PersonList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       persons:[]
    }
  }

  componentDidMount(){
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
      console.log("MyResponse",response);
  
  


  this.setState({
    persons:response.data
  })
})
}
  render() {
    return (
      <div>
        {this.state.persons.map((person)=>{
          return <li key={person.id}>{person.name}</li>
        })}
      </div>
    )
  }
}
