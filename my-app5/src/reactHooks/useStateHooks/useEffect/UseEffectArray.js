import React,{useState,useEffect} from 'react'

export default function UseEffectArray() {
  const [val,setVal]=useState("");
  const [val2,setVal2]=useState("");

useEffect(()=>{
  console.log(`first phase:${val}`);
},[val]);
useEffect(()=>{
  console.log(`second phase:${val2}`);
},[val2]);

  return (
    <div>
      <input type="text" 
      placeholder="first phase"
      value={val} onclick={(e)=>setVal(e.target.value)}/>

      <input type="text" 
      placeholder="second phase"
      value={val2} onclick={(e)=>setVal2(e.target.value)}/>
      
    </div>
  )
}
