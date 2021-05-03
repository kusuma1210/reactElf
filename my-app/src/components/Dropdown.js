import React, { Component } from "react";

 
export default class Dropdown extends Component {
  constructor(props) {
    super(props);

 
    this.state = {
      firstColor: "",
      secondColor: "",
      thirdColor: "",
    };
  }
  changeFirstColor = () => {
    this.setState({
      firstColor: (document.body.style.backgroundColor = "red"),
    });
  };
  changeSecondColor = () => {
    this.setState({
      secondColor: (document.body.style.backgroundColor = "blue"),
    });
  };
  changeThirdColor = () => {
    this.setState({
      thirdColor: (document.body.style.backgroundColor = "wheat"),
    });
  };

 
  render() {
    return (
      <div>
        <select>
          <option onClick={this.changeFirstColor}>first color</option>
          <option onClick={this.changeSecondColor}>second color</option>
          <option onClick={this.changeThirdColor}>third color</option>
        </select>
      </div>
    );
  }
}
