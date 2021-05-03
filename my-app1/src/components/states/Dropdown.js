import React, { Component } from "react";

 
export default class Dropdown extends Component {
  constructor(props) {
    super(props);

 
    this.state = {
      firstColor: "",
      secondColor: "",
      thirdColor: ""
    };
  }
  changeFirstColor = () => {
    this.setState({
      firstColor: (document.body.style.backgroundColor = "green"),
    });
  };
  changeSecondColor = () => {
    this.setState({
      secondColor: (document.body.style.backgroundColor = "pink"),
    });
  };
  changeThirdColor = () => {
    this.setState({
      thirdColor: (document.body.style.backgroundColor = "grey"),
    });
  };

 
  render() {
    return (
      <div>
        <select>
          <option onClick={this.changeFirstColor}>green color</option>
          <option onClick={this.changeSecondColor}>pink color</option>
          <option onClick={this.changeThirdColor}>grey color</option>
        
        </select>
      </div>
    );
  }
}

