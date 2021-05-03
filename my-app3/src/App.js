import React from "react"
import './App.css';
// import Loginsa from "./componentassignment/Navbar1";
//  import {BrowserRouter as Router,Route,Link,Switch,Redirect} from "react-router-dom"
//  import About from './componentassignment/about/About';
//  import Gallery from './componentassignment/gallery/Gallery';
//  import Login from './componentassignment/login/Login';
//  import Mytrip from './componentassignment/mytrip/Mytrip';
//  import Register from './componentassignment/register/Register';
// import Logout from './componentassignment/logout/Logout';
import Navbar1 from "./componentassignment/Navbar1"



function App() {
  
   
    <div className="App">
   
   <Navbar1/>
      {/* <Loginsa/> */}

    
</div>
  
}

export default App;




{/* <>
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
                <Link className="nav-link" to={`/login/${name}`}>Login</Link>
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
              
//               <li className="nav-item">
//              <Link className="nav-link" to={`/logout/${name}`}>Logout</Link>
//               </li>  
//             </ul>
//           </div>
//         </nav>
//         </div>

//         </> ):<Redirect to="nav2"/>
       
// }
            

          

         


//  <Switch>
// <Route path="/logout" component={Logout}/>


//   <Route exact path="/" component={Mytrip}/>
//   <Route path="/about" component={About}/>
//   <Route path="/gallery" component={Gallery}/>
//   <Route path="/login" component={Login}/>
//   <Route path="/register" component={Register}/>
  

  

  
//    </Switch>

//     </div>
//  </Router> 
//     // <Header/> 
    
//   ); */}


// const initialState={
//   login:false
// };

// const reducer=(state,action)=>{
//   switch(action.type){
//     case "login":
//       return {
//         login:true
//       };
//       case "logout":
//         return{
//           login:false
//         };
//         default:
//           return state;
//   }
// }
