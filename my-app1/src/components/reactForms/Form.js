import React, { Component } from 'react'

export default class Form extends Component {
constructor(props) {
  super(props)

  this.state = {
     username:"",
     comment:"",
     course:""
  }
}
 
getUsername=(e)=>{
  this.setState({
    username:e.target.value
  })
}

getComment=(e)=>{
  this.setState({
    comment:e.target.value
  })
}

getCourse=(e)=>{
  this.setState({
    course:e.target.value
  })
}
 
onSubmitForm=()=>{
  alert(`
  Username:${this.state.username}
  Comment:${this.state.comment}
  Course:${this.state.course}
  `)
}



  render() {
    return (
    
         <div className="col-md-4 offset-4 mt-2 card card-body">
                <h3 className="text-primary">FeedBack Form</h3>
                <form onSubmit={this.onSubmitForm}>
                    <div className="form-group">
                        <input className='form-control mt-4'
                            placeholder="username"
                            type="text" name="username"
                            onChange={this.getUsername} />
                    </div>

 
                    <div className="form-group">
                        <textarea className='form-control mt-4'
                            placeholder="Comment" name="comment"
                            onChange={this.getComment}></textarea>
                    </div>


 
                    <div className="dropdown mt-4">
                        <select className="form-group" onChange={this.getCourse}>
                            <option className="form-control"
                                value="none" selected disabled hidden>
                                Select an Option
                         </option>
                            <option className="form-control"
                                value="react">React</option>
                            <option className="form-control"
                                value="angular">Angular</option>
                            <option className="form-control"
                                value="vue">Vue</option>
                        </select>
                    </div>
                    <button className="btn btn-info mb-2 mt-2 " type="submit">Submit</button>
                </form>
            </div>

    
    )
  }
}
