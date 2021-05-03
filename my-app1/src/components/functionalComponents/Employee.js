
import React from 'react';

//functional components with destructuring

function Employee({ename,empID,designation}){
  return (
    <div>
      <h2>Employee name:{ename}</h2>
      <h3>Employee ID:{empID}</h3>
      <h3>employee DEsignation is:{designation}</h3>
    </div>
  )

}
export default Employee;