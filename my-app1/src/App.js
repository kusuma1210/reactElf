//import logo from './logo.svg';
import './App.css';
import Mountingeg from './components/lifecycle/mounting/Mountingeg';
import Unmountingeg from './components/lifecycle/unmounting/Unmountingeg';
// import jsxElement from './components/myjsxconcepts/MyJSX'
// //import Employee from "./components/myjsxconcepts/MyJSX"
// import Welcome from './components/functionalComponents/Welcome';
// import Employee from "./components/functionalComponents/Employee";
// import Student from "./components/functionalComponents/Student";
// import Greeting from './components/classComponents/Greeting';
// import School from "./components/classComponents/School";
// import list from './components/classComponents/Ingredientlist';
// import Garage from './components/classComponents/parking';
// import Manager from './components/states/login';
 import Dropdown from "./components/states/Dropdown";
 import Greeting from './components/propsValidation/Greeting';
import RadiumStyling from './components/reactstyling/radium/RadiumStyling';
// import Poet from './components/functionalComponents/FunDest';
// import Trip from './components/classComponents/ClassDest';
// import Company from './components/reactEvents/Company';
// import Vacation from './components/fragments/FragmentDemo';
// import Namelist from './components/listAndkeys/Namelist';
// import NumberList from './components/listAndkeys/NumberList';
// import PersonlList from './components/listAndkeys/PersonlList';
// import ProductList from './components/listAndkeys/ProductList';
// // import Maneger from './components/states/Manegers';
 import Mounting from "./components/lifecycle/mounting/Mounting"
// import ReactUpdating from './components/lifecycle/updating/ReactUpdating';
// import Sweet from './components/lifecycle/updating/Sweet';
// import ReactSnapUpdate from './components/lifecycle/updating/Reactsnapupdate';
// import Subject from './components/lifecycle/updating/Subject';
import Unmounting from './components/lifecycle/unmounting/Unmounting';
import Parentcomponent from './components/pureComponents/Parentcomponent';
import Form from './components/reactForms/Form';
import Trip from "./components/conditionalRendering/Trip"
// import Stylesheet from './components/reactstyling/Stylesheet';
//  import Inlinestyling from "./components/reactstyling/Inlinestyling"
//  import "./components/reactstyling/appStyle.css"
// import style from "./components/reactstyling/appStyle.module.css"
//const numbers=[12,33,44,67]
function App() {
  return (
    <div className="App">

{/* using a appStyle.css  file its globaly scoped and can be called in any file */}
{/* <h1 className="error">Error Message</h1>

{/* using a appStyle.module.css file is localy scoped */}
{/* <h2 className={style.success}>Success Messag</h2> */}
 

 

    {/* {jsxElement}
      {Employee} 
      
 <Welcome/>
       
  <Employee ename="kushi" empID={123} designation="sw"/>  */}
  
   {/* < Student sname="madhu" cgpa={8}>sports man</ Student>
   <Student sname="kusuma" cgpa={8.5}/>
   <Student sname="pavithra" cgpa={8.3}/> */}
   {/* <Greeting/> */}
   {/* <School sday="sports day" sdate="12032021">DressCode:red</School> */}

   {/* {list } */}
   {/* <Garage/> */}
   {/* <Maneger/> */}
   {/* <Manager/> */}
    {/* <Dropdown/>   */}
   {/* <Greeting name="kusuma" mobno={123}/ >   */}
   {/* <Poet poetName="kuvempu" message="abcd"/> */}
   {/* <Trip Place="kollegal" Budget={2000}/> */}
   {/* <Company/> */}
   {/* <Vacation/> */}
   {/* <Namelist/> */}
   {/* <NumberList numitems={numbers}/> */}
   {/* <PersonlList/> */}
   {/* <ProductList/> */}
   {/* <Form/> */}



{/* <Mounting favsubject="JS"/> */}

   {/* <Mounting /> */}
   {/* <ReactUpdating/> */}
   {/* <Sweet/> */}
   {/* <ReactSnapUpdate/> */}
   {/* <Subject/> */}
      {/* <Unmounting/>     */}
    {/* <Stylesheet regstyle={false}/> */}
    {/* <Inlinestyling/>  */}
     {/* <Mountingeg/>  */}
    {/* <Unmountingeg/> */}
    {/* <RadiumStyling/> */}
{/* <Parentcomponent /> */}
<Trip season="winter"/>
    </div>
  );
}

export default App;

