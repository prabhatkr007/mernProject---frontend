import React,{useEffect,useContext} from "react";
import "../App.css";
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {UserContext} from "../App";


function ColorSchemesExample() {
  // const {state, dispatch} = useContext(UserContext);

  
        return (
          <>
            <Navbar bg="light" expand="lg">
            <Container>
            <NavLink className="navbar-brand" to="/">
                HireME.com
              </NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <NavLink className="nav-link"to="/">Home</NavLink>
                  <NavLink className="nav-link"to="/about">About</NavLink>
                  <NavLink className="nav-link"to="/contact">Contact</NavLink>
                  <NavLink className="nav-link"to="/dev">Developer</NavLink>
                  <NavLink className="nav-link"to="/login">Signin</NavLink>
                  <NavLink className="nav-link"to="/signup">Registration</NavLink>
                  <NavLink className="nav-link"to="/logout">Logout</NavLink>
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
            </>
            )
      // } else{
      //   return (
      //     <>
      //       <Navbar bg="light" expand="lg">
      //       <Container>
      //       <NavLink className="navbar-brand" to="/">
      //           HireME.com
      //         </NavLink>
      //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //         <Navbar.Collapse id="basic-navbar-nav">
      //           <Nav className="ms-auto">
      //             <NavLink className="nav-link"to="/">Home</NavLink>
      //             <NavLink className="nav-link"to="/about">About</NavLink>
      //             <NavLink className="nav-link"to="/contact">Contact</NavLink>
                  
                  
                  
          //       </Nav>
          //     </Navbar.Collapse>
          //   </Container>
          // </Navbar>
          //   </>
          //   )
    //   }
    // }

  
      
}

export default ColorSchemesExample;