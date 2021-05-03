import React,{useContext} from 'react'

const MyContext=React.createContext();

export default function UseContextHook() {

  return (
    <div>
      <MyContext.Provider value={50}>
      <Sample/>
      </MyContext.Provider>
    </div>
  )
}



 function Sample() {
  return (
    <div>
      <MyContext.Consumer>
        {(value)=>{
        return <h2>the value was{value}</h2>
        }}
      </MyContext.Consumer>
    </div>
  );
}
