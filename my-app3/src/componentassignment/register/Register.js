import React from 'react';
import {useHistory} from "react-router-dom";


export default function Register() {
  const history=useHistory();
  return (

    <div className="card card-body col-md-4 offset-4 mt-4">
      <form>
        <div className="form-group">
    <h1>REGISTER </h1> 
    <h6><input type="text" className="form-group" placeholder="enter your name"/></h6>
    <h6><input type="text" className="form-group" placeholder="enter your Email ID"/></h6>
    <h6><input type="text" className="form-group" placeholder="enter your Phone number"/></h6>
    <h6>Gender</h6>
    
    <h6><input type="radio"value="m" className="form-group" checked/>male</h6>
    <h6><input type="radio"value="f" className="form-group" />female</h6>
    Address:<textarea name="addr"  cols="30" rows="10" className="form-group" ></textarea>
    <br/>
    <button onClick={()=>history.push('/login')}>Submit</button>
    </div>
    </form>
    </div>
  
  )
}
