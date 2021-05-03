import React from "react";

class School extends React.Component{
  render(){
    return(
      <div>
        <h1>school Calender</h1>
        <h3>Mondy:{this.props.sdays} on:{this.props.sdate}</h3>
        <h3>{this.props.children}</h3>
      </div>
    )
  }
}
export default School;
