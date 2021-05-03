import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import About from './components/about/About';
import Trip from './components/conditionalRendering/Trip';


function App() {

//passing route parameter
  const name="kusuma";

  //Guarding Routes (true or false)
const isAuthenticated=true;

  return ( 
    
     <Router>
    <div className="App">
     
{/* <ul>
  <li><Link  to="/">Home</Link></li>
  <li><Link to="/contact">contact</Link></li>
  <li><Link to="/login">login</Link></li>
</ul> */}

{/*  BS nav bar*/}
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">MyTrip</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/login/${name}`}>Login</Link>
              </li>

 
            </ul>
          </div>
        </nav>


<Switch>
  <Route exact path="/" component={Home}/>

  {/* Guarding Routes */}
   {isAuthenticated ?
  <>
  <Route path="/contact" component={Contact}/>
  <Route path="/login/:name" component={Login}/>
  <Route path="/about/" component={About}/>
  </>:<Redirect to="/"/>
}
</Switch> 
 
</div>

     </Router> 

  );
}

export default App;


