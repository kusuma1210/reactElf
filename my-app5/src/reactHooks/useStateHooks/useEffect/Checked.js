import React,{useState,useEffect} from 'react'

export default function Checked() {
  const [checked,setChecked]=useState(false);

  useEffect(()=>{
    alert(`checked:${checked.toString()}`)
  })
  return (
    <div>
      <input type="checkbox" value={checked} 
      onChange={()=>setChecked(checked=>!checked)}/>
      {checked?"box checked":"box unchecked"}
    </div>
  )
}
