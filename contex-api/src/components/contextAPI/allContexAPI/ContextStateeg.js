import React from "react";

//step 1:creat context
const context=React.createContext();

//step 2:creat provider
class Provider extends React.Component{
  state={
    name:"kusuma",
    status:"Greeting from us!!"
  }
  render(){
    return(
      <>
      <context.Provider value={{state:this.state,
      changeStatus:()=>{this.setState({status:"Thanks for joining!!"});}
      }}>
      {this.props.children}

      </context.Provider>
      </>
    );
  }
}

//step 3:get rid of props in child components
const Trial=props=>(
  <>

{/* this consumer the data from the provider */}

<context.Consumer>
  {(context)=>(
    <>
    <p>Welcome:{context.state.name}</p>
    <p>Resort:{context.state.status}</p>
    <button onClick={context.changeStatus}>click</button>
    </>
)
    }
    
  
</context.Consumer>

  </>
)

const Lift=props=>(
  <>
  <Trial/>
  </>

)

//step creating class component


export default class ResortStates extends React.Component {
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
