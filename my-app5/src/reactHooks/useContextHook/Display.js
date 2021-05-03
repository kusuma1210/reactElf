import React,{useContext} from 'react'

const MyContext=React.createContext();

export default function Display() {

  return (
    <div>
      <MyContext.Provider value={50}>
      <Sample/>
      </MyContext.Provider>
    </div>
  )
}



 function Sample() {
  const value=useContext(MyContext);
  return (
    <div>
      <h2>my value was{value}</h2>
    </div>
  )
}
