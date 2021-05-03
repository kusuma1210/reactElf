import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from "react-router-dom"
import About from './about/About'
import Gallery from './gallery/Gallery'
import Login from './login/Login'
import Logout from './logout/Logout'
import Mytrip from './mytrip/Mytrip'
import Register from './register/Register'


const name="kusuma";

  const login=false;

export default class Navbar1 extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       login:true,
       logout:true
    }
  }
 handleClick=()=>{
  this.setState({
    login:false
  })
}
   onhandleClick=()=>{
     this.setState({
       logout:false
     })
   }
  
  render() {
    return (
      <Router>
      <div>
      {state.login ?(  
        <>
 <div className="nav1">
       
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">MyTrip</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/about">About </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gallery">Gallery</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
                 <li className="nav-item">
                   
                  <Link className="nav-link" onClick={"handleClick"} to={`/login/${name}`}>Login</Link>
                </li>
             </ul>
            </div>
          </nav>
          </div> ):(
          
           
            <div className="nav2">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">MyTrips</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/about">packages </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">addtrip</Link>
              </li>
               {/* <li className="nav-item">
                <Link className="nav-link" to="/logout">Logout</Link>
              </li>  */}
              
              <li className="nav-item">
             <Link className="nav-link" onClick={"onHandleClick"} to={`/logout/${name}`}>Logout</Link>
              </li>  
            </ul>
          </div>
        </nav>
        </div>

        </> ):<Redirect to="nav2"/>
       
        <Switch>
<Route path="/logout" component={Logout}/>


  <Route exact path="/" component={Mytrip}/>
  <Route path="/about" component={About}/>
  <Route path="/gallery" component={Gallery}/>
  <Route path="/login" component={Login}/>
  <Route path="/register" component={Register}/>
  

  

  
   </Switch>

    </div>
 </Router> 
            
      
    )
  }
}
