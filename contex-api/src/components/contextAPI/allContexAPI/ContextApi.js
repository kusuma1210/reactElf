import React from "react";

//step 1:creat context
const Mycontext=React.createContext();

//step 2:creat provider
class Provider extends React.Component{
  state={
    name:"snow mountain"
  }
  render(){
    return(
      <>
      <Mycontext.Provider value={{state:this.state}}>
      {this.props.children}
      </Mycontext.Provider>
      </>
    );
  }
}

//step 3:get rid of props in child components
const Trial=props=>(
  <>

{/* this consumer the data from the provider */}

<Mycontext.Consumer>
  {(context)=>
    <p>this is the context value:{context.state.name}</p>
  }
</Mycontext.Consumer>

  </>
)

const Lift=props=>(
  <>
  <Trial/>
  </>

)

//step creating class component


export default class ResortNew extends React.Component {
  render() {
    return (
      <div>
        <Provider>
          <Lift/>
        </Provider>
        
      </div>
    )
  }
}
