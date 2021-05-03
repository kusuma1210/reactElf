import React from 'react';

import {Redirect} from "react-router-dom";


export default function Logout({match:{params:{name}}}) {
  // const {}=useParams();
  return (
    <div>
       {name !=="suma" ? <Redirect to="/"/>:null}
             <h3>Logged in as {name}</h3> 
             
    </div>
  )
}
