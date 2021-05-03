import React, { Component } from 'react';

export default class Trip extends Component {
  render() {
    const {Place,Budget}=this.props;
    return (
      <div>
        <h2>place:{Place}</h2>
        <h3>budget:{Budget}</h3>
      </div>
    )
  }
}
