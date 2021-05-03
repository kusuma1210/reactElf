import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Signup extends Component {
  constructor(props) {
      super(props)
      this.state = {
          username: '',
          password: ''
      };
  }

  // Add the function here:
                  //1
  handleChange = (event) => {
              //2
      this.setState({
              //3                     //4
          [event.target.name]: event.target.value,
      });
  }

  handleSubmit = (event) => {
    //1
    fetch("http://localhost:3000/api/user", {
        method: 'POST', //2
        body: JSON.stringify({user:this.state}), //3
        headers: new Headers({
            'Content-Type': 'application/json' //4
        })
    }).then(
        (response) => response.json() //5
    ).then((data) => {
        this.props.setToken(data.sessionToken) //6
    }) 
    event.preventDefault()
}

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, atque nulla, soluta vero reprehenderit numquam incidunt, rem quaerat quos voluptatum perferendis. Distinctio culpa iste atque blanditiis placeat qui ipsa?</h6>
                
                <Form onSubmit={this.handleSubmit} > 
    <FormGroup>
    <Input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
</FormGroup>
<FormGroup>
    <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
    </FormGroup>
     <Button type="submit"> Submit </Button>                    
 </Form>
            </div>
        )
    }
}

export default Signup;