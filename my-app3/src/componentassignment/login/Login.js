import React from 'react';
import {useHistory,Redirect} from "react-router-dom";
import Logout from '../logout/Logout';
import Mytrip from '../mytrip/Mytrip';

export default function Login({setLogin}) {
  const history=useHistory();
  // const email="kusuma@123"

  let loginFunction = () => {
    setLogin(true);
}

//   changeNav=(props)=>{
// if(props.sucess===props.email){
//   return<Mytrip/>
// }

// else{
// return <Logout/>
// }
  // }

  return (
    <div className="card card-body col-md-4 offset-4 mt-4">
      <form>
  <h4>Email ID:<input type="text"  className="form-control" placeholder="enter the Email ID"/></h4> 
  <h4>Password:<input type="text" className="form-control" placeholder="Enter the password"/></h4>
  {/* <h4>Phone num:<input type="text" placeholder="Enter the Phone number"/></h4> */}
  <button onClick={()=>history.push('/register')} style={{padding:10,margin:10}}>Register</button>
   {/* <button onClick={changeNav()} style={{padding:10,margin:10}}>login</button> */}
   <button className="btn btn-info" onClick={loginFunction}>Login</button>
   </form>
   
    </div>
  )
}



// export default function Login({ setLogin }) {

 
//     let loginFunction = () => {
//         setLogin(true);
//     }

 
//     // let history = useHistory();
//     // const routeChange = () => {
//     //     let path = '/logout';
//     //     history.push(path);
//     // }
//     return (
//         <div>
//             Login works!!
//             <button className="btn btn-info" onClick={loginFunction}>Login</button>
//             </div>
//     )
// }