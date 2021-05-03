import React from 'react'
import {Redirect,useParams} from "react-router-dom";

export default function Login({match:{params:{name}}}) {

  //destructuring of parameters
  //{match:{params:{name}}}

  //using router hook useParams():no need to destructure
//  const {name}=useParams();
  return (
    <div>
{/* Redirecting to another page */}
  {name !=="suma" ? <Redirect to="/"/>:null}  
      login page!!
      <h3>Logged in as {name}</h3>
    </div>
  )
}
