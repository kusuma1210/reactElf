import React from 'react';
import useCounter from "../customHooks/useCounter"

export default function MyCounter() {
  const [count,increment,decrement,reset]=useCounter(20);
  return (

    <div>
      <h1>count-{count}</h1>
      <button onClick={()=>{increment(20)}}>increment</button>
      <button onClick={()=>{decrement(20)}}>decrement</button>
      <button onClick={()=>{reset(20)}}>reset</button>
    
      
    </div>
  )
}
