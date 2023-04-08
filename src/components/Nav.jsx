import React, { useContext } from "react";
import "../App.css";
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UserContext } from "../App";


function ColorSchemesExample({ state }) {

  
  const RenderMenu = () => {
    
    if (!state) {
      return (
        <>
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/about">AboutMe</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
          <NavLink className="nav-link" to="/dev">Developer</NavLink>
          <NavLink className="nav-link" to="/login">Signin</NavLink>
          <NavLink className="nav-link" to="/signup">Registration</NavLink>
        </>
      )
    } else {
      return (
        <>
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/about">AboutMe</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
          <NavLink className="nav-link" to="/dev">Developer</NavLink>
          <NavLink className="nav-link" to="/signup">Registration</NavLink>
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </>
      )
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink className="navbar-brand" to="/">
          HireME.com
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <RenderMenu />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

// Wrapping ColorSchemesExample with UserContext.Provider
function ColorSchemesExampleWrapper() {
  const { state } = useContext(UserContext);
  
  return (
    <UserContext.Provider value={{ state }}>
      <ColorSchemesExample state={state} />
    </UserContext.Provider>
  )
}

export default ColorSchemesExampleWrapper;
