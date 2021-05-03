import React from "react"

class Car extends React.Component{
render(){
return(
  <div>
    <h2>color of the car{this.props.color}</h2>

    {/* props as an object */}
    <h4>Car Model:{this.props.carinfo.model}and the parent company is:{this.props.carinfo.owner}</h4>
  </div>
)
}
}

class Garage extends React.Component{
  render(){
    // props as an variable name
let carColor="Red";

  //  props as an object
  const carDetails={model:2021,owner:"Mahendra"}

  return(
    <div>
      {/* <h3>Iam a garage component</h3> */}

   {/* passing props from one component to another component */}
   <Car color={carColor}/>

     {/* props as an object */}
     <Car carinfo={carDetails}/>

       {/*<Car color="royal blue"/>*/}
    </div>
  )
  }
  }

  export default Garage;