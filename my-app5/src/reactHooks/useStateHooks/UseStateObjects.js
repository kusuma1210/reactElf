import React,{useState} from 'react'

export default function UseStateObjects() {

  const [name,setName]=setState({firstName:"",lastName:""});
  return (
    <div>
      <input type="text" placeholder="firstname" value={name.firstName}
      onChange={(e)=>setName({
        ...name,
        firstName:e.target.value
      })}
      />
      <input type="text" placeholder="lastname" value={name.lastName}
       onChange={(e)=>setName({
         ...name,
        lastName:e.target.value
      })}
      />


      <h2>your first name:{name.firstName}</h2>
      <h2>your last name:{name.lastName}</h2>


      {/* in usestate there is nomergin and updating
      in setStaet ther is mergin and  in usestate ther is no merging */}
      <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}
