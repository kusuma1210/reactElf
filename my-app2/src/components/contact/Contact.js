import React from 'react';
import {useHistory} from "react-router-dom"



//navigating programatically
// history object as a props {history} as desrtucturing
export default function Contact() {
  const history=useHistory();
  return (
    <div>
      contact page!!
      <button onClick={()=>history.push('/')}>go to Home page</button>
    </div>
  )
}
