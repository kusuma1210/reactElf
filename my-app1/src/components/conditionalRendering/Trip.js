import React from 'react';

function Lake({name}){
  return <h2>Visit{name}</h2>
}

function Skiresort({name}){
  return <h2>Visit{name}</h2>

}
export default function Trip(props)  {
  if(props.season==="summer"){
    return <Lake name="summer lake"/>
  }
  else{
    return <Skiresort name="winter resort"/>
  }
}
