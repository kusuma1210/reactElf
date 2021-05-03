import React from 'react';
import './Stylesheet.css';

export default function Stylesheet(props) {
let mystyle=props.regstyle?"primary" : 'secondary';

  return (
    <div>
      <h1 className={`${mystyle} Demo`}>Stylesheet</h1>
    </div>
  );
}
