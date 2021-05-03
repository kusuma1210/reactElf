
import React from 'react';

function Student(props){
  return (
    <div>
      <h1>Student name:{props.sname}</h1>
      <h2>CGPA:{props.cgpa}</h2>
      <h3>{props.children}</h3>
    </div>

  )
}
export default Student;