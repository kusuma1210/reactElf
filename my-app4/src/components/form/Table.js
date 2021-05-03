import React, { Component } from 'react';


export default class Table extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       people:[],
    };
    this.addPerson=this.addPerson.bind(this);
  }
  addPerson(name,job){
    this.state.people.push({name:name,job:job});
  }  
componentDidMount(){
  this.getPeople();
}
// getPeople(){
//   fetch(`https://jsonplaceholder.typicode.com/users`)
//  .this(response=>response.json())
//  .this(response=>this.setState({people:response})) ;
//  .catch(error=>console.log(error));
// }



  render() {
    return (
      <div>
        <form>
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>job</th>
              <th>option</th>
            </tr>
            </thead>
            <tbody>
              {this.state.people.map((person,index)=>{
                return(
                  <tr key={person.job}>
                    <th>{index+1}</th>
                    <td>{person.name}</td>
                    <td>{person.job}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </form>
      </div>
    )
  }
}

