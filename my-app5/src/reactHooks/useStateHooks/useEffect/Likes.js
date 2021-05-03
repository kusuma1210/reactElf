import React ,{useState,useEffect}from 'react'

export default function Likes() {
  const [likes,setLikes]=useState(0);

  //using useEffect
  useEffect(()=>{
    document.title=`you got ${likes} Likes11`
  })
  return (
    <div>
      
    <h2>your likes are{likes}</h2>
    <button onclick={()=>setLikes(likes+1)}>click</button>
    </div>
  )
}
