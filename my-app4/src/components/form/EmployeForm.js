import React, { Component } from "react";

class EmployeForm extends Component {
  state = {
    ...this.returnStateObject(),
  };

  returnStateObject() {
    if (this.props.currentIndex == -1)
      return {
        employeId: "",
        employeName: "",
        employeDest: "",
        employeSalary: "",
      };
    else return this.props.list[this.props.currentIndex];
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex != this.props.currentIndex ||
      prevProps.list != this.props.list
    ) {
      this.setState({ ...this.returnStateObject() });
      console.log(prevProps, this.props);
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddOrEdit(this.state);
  };

  render() {
    return (
      <div className="col-md-4 offset-4 mt-2 card card-body">
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <center>
          <fieldset>
            <legend>EMPLOYEE:</legend>
            EMPLOYEE ID
            <div className="form-group">
            <input
            className="form-control"
              name="employeId"
              placeholder=" employee id"
              onChange={this.handleInputChange}
              value={this.state.employeId}
            />
            </div>
            <br />
           
            EMPLOYEE NAME
            <div className="form-group">
            <input
              name="employeName"
              className="form-control"
              placeholder="name of employee"
              onChange={this.handleInputChange}
              value={this.state.employeName}
            />
            </div>
            <br />
            
            EMPLOYEE DESIGNATION
            <input
              name="employeDest"
              className="form-control"
              placeholder="designation"
              onChange={this.handleInputChange}
              value={this.state.employeDest}
            />
          
            <br />
            
            EMPLOYEE SALARY
            <input
              name="employeSalary"
              className="form-control"
              placeholder="your salary"
              onChange={this.handleInputChange}
              value={this.state.employeSalary}
            />
            
            <br />
            
            <div>
              
            <button className="btn btn-info" type="submit">Submit</button>
            </div>
          </fieldset>
        </center>
      </form>
      </div>
    );
  }
}

export default EmployeForm;


