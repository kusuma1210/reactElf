import React,{useState} from 'react'

export default function Year() {
 const [Year,setYear]=useState(2021);
  return (
    <div>
      <h2>{Year}</h2>
      <button onClick={()=>setYear(Year+1)}>click</button>
    </div>
  )
}
