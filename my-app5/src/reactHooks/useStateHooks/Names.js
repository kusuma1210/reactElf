import React, {useState}from 'react';

export default function Names() {

 const [name,setName] =useState("sunny");
 const [likes,setLikes]=useState(0);
  return (
    <div> 
      <h2>{name}</h2>
      <button onClick={()=>setName("prathama")}>click</button>
      <h2>you got {likes} likes</h2>
      <button onClick={()=>setLikes(likes+1)}>likes</button>
    </div>
  )
}
