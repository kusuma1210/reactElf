import React from"react";

function Lake(){
  return <h3>summer Lake</h3>
}

function Resort(){
  return <h3>Winter Resort</h3>
}

export default function Vacation(){
  return(
    <>
    {/* <React.fragment> */}
      <Lake/>
      <Resort/>
    {/* </React.fragment> */}
    </>
  )
}