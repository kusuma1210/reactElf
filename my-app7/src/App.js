import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import KeyPadComponent from "./components/calculator/KeyPadComponent";
import ResultComponent from "./components/calculator/ResultComponent";
//import ResultComponent from "./components/ResultComponent";
//import KeyPadComponent from "./components/KeypadComponent";

 
class App extends Component {
  constructor() {
    super();
    //initially the state will be zero
    this.state = {
      result: "",
    };
  }
  
  //--------step-2------
  //create onClick () -take "name" of the button clicked to change the state depending on the input
  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

 
  // ----------step-1-----------

 
  //creating fun's (when onclicked on some button it shoould do some particular action)

 
  // fun'1-- calculate()-  Calculate result, this is triggered when “=” button is pressed

 
  calculate = () => {
    try {
      this.setState({
        //eval() evaluates the expression
        result: (eval(this.state.result) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

 
  //fun'2-- reset() -Clear our output-- trigered when “C” is pressed.

 
  reset = () => {
    this.setState({
      result: "",
    });
  };

 
  //fun'n 3- Clear the last character that was pressed triggered on “CE”.

 
  backspace = () => {
    this.setState({
      //slice(start,end ) here it deletes the last value
      result: this.state.result.slice(0, -1),
    });
  };

 
  render() {
    return (
      <div>
        <div className="card card-body" style={{marginLeft: 600, width:250}}>
        <div className="calculator-body" >
          <h1 >Simple Calculator</h1>

          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
        </div>
      </div>
    );
  }
}
export default App;


//import logo from './logo.svg';
// import './App.css';
// import Table from './components/Table';
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
//import {facoffee} from "@fortawesome/free-solid-svg-icons";



// function App() {
//   return (
//     <div className="App">
//       <Table/>
    
      
//     </div>
//   );
// }

// export default App;
