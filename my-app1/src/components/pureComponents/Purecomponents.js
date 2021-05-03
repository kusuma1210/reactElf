import React, { PureComponent } from 'react';

export default class Purecomponents extends PureComponent {
  render() {
    console.log("****pure components*****");
    return (
      <div>
        <h2>pure component<b>{this.props.names}</b></h2>
        
      </div>
    )
  }
}
