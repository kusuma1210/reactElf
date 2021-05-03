import React from 'react'

export default function Namelist() {

  //step 1: creat array
  const items=["books","pencils","pens"];


  //ex 3:mapping the arrya values usin list
  const itemlist=items.map((item)=>{
    return <li>{item}</li>
  })
  return (
    <div>

      {/* //ex 1: 
      // rendering the array values using index(old way) */}
      
      <h2>{items[0]}</h2>
      <h2>{items[1]}</h2>
      <h2>{items[2]}</h2>

{/* //ex 2
//rendering the array values using map method without key */}

{items.map((item)=>{
  return <li>{item}</li> 
})}

      
    </div>
  )
}
