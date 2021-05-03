import React,{useState,useEffect} from 'react'

export default function UseEffectperson() {
   const [name,setName]=useState({firstname:"fname",surname:"sname"})
useEffect(()=>{
setName({
  firstname:"priya",
  surname:"gowda"
})
 } ,[]);

  return (
    <div>
      <h2>{name.firstname}</h2>
      <h2>{name.surname}</h2>
    </div>
  )
}
