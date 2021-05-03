import React from 'react';

//adding the inline style
const header={
  fontSize:"45px",
  color:"blue"
}
 
function Inlinestyling(){
  return(
    <div>

<h2 className="error">iam a normal color</h2>

    {/* //inline styling using a variable name */}
    <h2 style={header}>Im a inline styling</h2>

    <h1 style={{color:"grey", fontFamily:"cursive"}}>Hello World!!</h1>
    </div>
  )
}
export default Inlinestyling;