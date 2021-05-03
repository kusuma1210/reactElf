import React, { Component } from "react";
class Table extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

 
  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements["name"].value;
    const job = form.elements["job"].value;
    this.props.addPerson(name, job);
    form.reset();
  }

 
  render() {
    return (
      <div
        className="card card-body col-md-4   mr-4 mt-4  "
        style={{ width: 500 }}
      >
        {/* <form> /}
        <h1>
          <b>Form:</b>
        </h1>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label>
              <b>Name:</b>
            </label>
            <input
              id="name"
              className="form-control"
              type="text"
              defaultValue=""
              placeholder="Enter your Name ..."
            />

 
            <label>
              <b>Job:</b>
            </label>
            <input
              id="job"
              className="form-control"
              type="text"
              defaultValue=""
              placeholder=" enter your job..."
            />

 
            <button
              className="btn btn-primary"
              onClick={() => this.formSubmit.bind(this)}
            >
              Submit
            </button>

 
            {/ <button
                onClick={this.formSubmit.bind(this)}
                className="btn btn-info"
                value="submit"
              >
                submit
              </button> /}
          </div>
        </form>
        {/ </form> */}
      </div>
    );
  }
}
export default Table;