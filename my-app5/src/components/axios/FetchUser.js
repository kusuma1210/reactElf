import React, { Component } from 'react'

export default class FetchUser extends Component {
  state={
    loading:true,
    person:null
  }
async componentDidMount(){
  const url="https://api.randomuser.me/";
  const response=await fetch(url);
  const data=await response.json();
   this.setState({
     person:data.results[0],
     loading:false
   })

  console.log("user data",data);
}

  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (<div>Loading...</div>):
        (
          <>
          <div>{this.state.person.name.title}</div>
          <div>{this.state.person.name.first}</div>
          <div>{this.state.person.name.last}</div>
          <img src={this.state.person.picture.large}/>

        </>)

        }
      </div>
    )
  }
}
