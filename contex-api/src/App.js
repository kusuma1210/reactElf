import logo from './logo.svg';
import './App.css';
//import { UserProvider } from './components/useContext';
//import ComponentC from './components/contextAPI/contextComponents/ComponentC';
//import Resort from './components/contextAPI/allContexAPI/PropsDrilling';
import ResortNew from './components/contextAPI/allContexAPI/ContextApi';
import ResortState from './components/contextAPI/allContexAPI/ContextState';
import ResortStates from './components/contextAPI/allContexAPI/ContextStateeg';

function App() {
  return (
    <div className="App">
      {/* <UserProvider value="kusuma"> */}
{/* <ComponentC/> */}

      {/* </UserProvider> */}

{/* <Resort/> */}
{/* <ResortNew/> */}
{/* <ResortState/> */}
<ResortStates/>
    </div>
  );
}

export default App;
