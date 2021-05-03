import React from 'react'
//passing the arrray of elements as prpos
//creat the array where you are passing as apropps to the component
export default function NumberList(props) {

  //numitems is the props that needs to be passed for the numberList component
  const numList=props.numitems;
  const updatedaNumItems=numList.map((newitems)=>{
    return <li>{newitems}</li>
  })
  return (
    <div>
      <ul>{updatedaNumItems}</ul>
    </div>
  )
}
