import React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import LoginContainer from '../facebook/LoginContainer';
const NavBar = (props) => {
    return (
      <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Artist" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Carna</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Pepita</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <LoginContainer setIsLoggedIn={props.setIsLoggedIn} isLoggedIn={props.isLoggedIn}  />
            </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
  
  export default NavBar;