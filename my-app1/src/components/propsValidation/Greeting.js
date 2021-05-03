import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Greeting extends Component {
  render() {
    return (
      <div>
        <h2>Name:{this.props.name}</h2>
        <h2>Mobile no:{this.props.mobno}</h2>
      </div>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  mobno: PropTypes.number.isRequired,
};

Greeting.defaultProps = {
  name: "hello stranger!!",
  mobno: "please enter mob num",
};
