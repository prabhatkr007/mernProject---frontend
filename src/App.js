import React, { createContext ,useReducer} from 'react';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Nav';
import Error from './components/Error';
import Logout from './components/Logout';
import Dev from './components/Dev';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes,Route} from "react-router-dom";
import "./App.css";


export const UserContext = createContext();



const App = () => {
  

  // const [state, dispatch] = useReducer(reducer, intialState);

  return (<>

      <Navbar />
    
  
    <Routes>
     
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/dev" element={<Dev />} />
      <Route exact path="/logout" element={<Logout />} />
      {/* <Route render={<Error />} /> */}
      
      <Route path="/*" element={<Error />} />
      </Routes>
      
      
      </>)


  
  // {/* <UserContext.Provider value = {{state, dispatch}}>
  //   <Navbar />
  //   <Routing />
  // </UserContext.Provider> */}

 
   

  
}

export default App