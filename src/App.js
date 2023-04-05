import React, { createContext ,useReducer} from 'react';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Nav';
import Error from './components/Error';
import Logout from './components/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes,Route} from "react-router-dom";
import "./App.css";


export const UserContext = createContext();



const App = () => {
  

  // const [state, dispatch] = useReducer(reducer, intialState);

  return (<>

      <Navbar />
    
  
    <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
      <Route render={() => <div>Not Found</div>} />
  
      <Route path="*" element={<Error />} />
      </Routes>
      
      
      </>)


  
  // {/* <UserContext.Provider value = {{state, dispatch}}>
  //   <Navbar />
  //   <Routing />
  // </UserContext.Provider> */}

 
   

  
}

export default App