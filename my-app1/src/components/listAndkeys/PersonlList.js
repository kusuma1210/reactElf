import React from 'react';
import Person from "./Person";

const persons=[
  {
  name:"pavithra",
  place:"mathiker",
  empID:1222
  },
  {
  name:"kusuma",
  place:"kathreguppe",
  empID:1333
  },
  {
  name:"prathama",
  place:"banasankari",
  empID:1444
  },
  {
  name:"madhu",
  place:"mathiker",
  empID:1445
  }
]

export default function PersonlList() {
  const employeelist=persons.map((person)=>
  <Person key={person.empID} personDetails={person}/> )
  return (
    <div>
      {employeelist}
    </div>
  )
}
