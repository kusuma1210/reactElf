import React, { Component } from 'react'

export default class Company extends Component {
constructor(props){
  super(props);

  this.state={
    companyName:"",
    designation:""
  }

  //using bind()
  //this binding is neccesary to make "this" work in callback
  this.changeCompanyName=this.changeCompanyName.bind(this);
}
changeCompanyName=(e)=>{
  e.preventDefault();
  this.setState({
    companyName:e.target.value
  })
}

changeDesignation=(e)=>{
  e.preventDefault();
  this.setState({
    designation:e.target.value
  })
} 

  render() {
    return (
      <div>
        <label htmlFor="cname">Enter Company Name</label>
        <input type="text" id= "cname"
        onChange={this.changeCompanyName}/>


        <input type="text" id="cname" placeholder="enter the designation"
        oncharge={this.changeDesignation}
        onChange={this.changeDesignation.bind(this)}/>

        <h2>company name you entered is:{this.state.companyName}</h2>
        <h2>Designation entered is:{this.state.designation}</h2>

        
      </div>
    )
  }
}
