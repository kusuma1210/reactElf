import React, { Component } from 'react'

//step2:create a data component
 const DataComponent=(ComposedComponent,url)=>


 class DataComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:[],
       loading:false,
       loaded:false
    }
  }

  componentDidMount(){
    //to load the data
    this.setState({
      loading:true
    });
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
      this.setState({
        loaded:true,
        loading:false,
        data
      })
    })
  }
  
  render() {
    return (
      <div>
        {this.state.loaded ? (<ComposedComponent {...this.state}{...this.props}/>
        ):(
        <div>please wait data is loading!!</div>
        )}
      </div>
    )
  }
}

//step 1:presentation component i.e the composed component
const PeopleList=({data})=>(
<ol>
  {data.results.map((person,i)=>{
    //destructuring the data value
    const {first,last}=person.name;
    return(
      <li key={i}>{first}{last}</li>
    )
  })

  }
</ol>);
//************using the hoc************* */
//peoplelist=composedcomponent parameter
//"https://randomuser.me/api?results=10"==refers to url parameter

//randomusers is new component
const RandomUsers=DataComponent(PeopleList,"https://randomuser.me/api?results=10");


export default RandomUsers;


