import React,{useReducer} from 'react'

export default function Reducer() {
  const [checked,toogle]=useReducer(checked=>!checked,false);
  return (
    <div>
      <input type="checkbox" value={checked}
      onchange={toogle}/>
      {checked?"box checked":"box unchecked"}
        </div>   

  )
}
