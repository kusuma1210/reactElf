import React from 'react'
import Radium from "radium" 

 function RadiumStyling() {
  const styles={
    ":hover":{
      backgroundColor:"red"
    }
  }
  return (
    <div>
      <h2>Radium styling</h2>
      <button style={styles}>Radium button</button>
      
    </div>
  )
}

export default Radium(RadiumStyling);
