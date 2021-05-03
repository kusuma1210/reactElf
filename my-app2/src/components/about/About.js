import React from 'react';
import {useLocation} from "react-router-dom";

export default function About() {

  const {pathname}=useLocation();
  return (
    <div>
      About works!!
      current URL:<h2>{pathname}</h2>
    </div>
  )
}
