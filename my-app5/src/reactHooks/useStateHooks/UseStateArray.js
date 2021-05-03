import React,{useState} from 'react'

export default function UseStateArray() {
  const [items,setItems]=useState([]);
  const addItems=()=>
  setItems([

    //make a copy using the spread operator and append
    // appending the anotehr object ,we are not over writting
    ...items,{
    id:items.length,
  value:Math.floor(Math.random()*100)+1}
    ])
  return (
    <div>
      <button onClick={addItems}>Add items</button>
      <ul>
        {
          items.map(items=>{
            return <li key={items.id}>{items.value}</li>
        })
      }
      </ul>
    </div>
  )
}
