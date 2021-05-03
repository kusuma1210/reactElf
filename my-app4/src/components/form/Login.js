import React, { Component } from 'react'

export default class Login extends Component {
constructor(props) {
    super(props)

    this.state = {
         name:this.props.name,
         job:this.props.job
    }

this.handleChange=this.handleChange.bind(this)
this.addPerson=this.addPerson.bind(this);



}

handleChange(e){
    this.setState({[e.target.id]:e.target.value})
}


addPerson(name,job){
    this.props.addPerson(name,job);
    this.setState({name:'',job:''});
}





    
  render() {
    return (
      <div>
    <div className="col-md-4 offset-4 mt-2 card card-body">
                <h2 className="text-primary">Register</h2>
                <form onSubmit={this.onSubmitForm}>
                    <div className="form-group">
                        <h2>Name</h2>
                        <input className='form-control mt-4'
                            placeholder="Enter your name"
                            type="text" name="{this.state.name}"
                            onChange={this.getUsername} />
                    </div>

 
                    <div className="form-group">
                        <h2>job</h2>
                        <input className='form-control mt-4'
                            placeholder="Enter your job" name="{this.state.job}"
                            onChange={this.getComment}></input>
                    </div>


 
                    {/* <div className="dropdown mt-4">
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
                    </div> */}
                    <button  onlick={()=>this.addPerson(this.state.name,this.state.job)} className="btn btn-info mb-2 mt-2" type="submit">Submit</button>
                </form>
            </div>

        
      </div>
    )
  }
}
