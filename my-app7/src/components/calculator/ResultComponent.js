//1 st we create a result component---to display the result

 
import React, { Component } from "react";

 
export default class ResultComponent extends Component {
  render() {
    let { result } = this.props;
    return (
      // <div className="card card-body" style={{height:20, width:200}}>
      <div className="result">
        {/* <p>- displays content from props */}
<div>
      <h2>{result}</h2>
        
        </div>
      </div>
      // </div>
    );
  }
}