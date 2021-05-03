import React from 'react'

export default function Poet(props) {
  const {poetName,message}=props;
  return (
    <div>
      <h2>Message:{message}</h2>
      <h3>PoetName:{poetName}</h3>
    </div>
  )
}
