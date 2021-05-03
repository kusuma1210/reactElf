import React from 'react';

export default function Persons({personDetails}) {
  return (
    <div>
      <h2>im {personDetails.name} and im from {personDetails.place}.my employee id{personDetails.empID}</h2>
    </div>
  )
}
