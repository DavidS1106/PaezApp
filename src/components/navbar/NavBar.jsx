import React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import LoginContainer from '../facebook/LoginContainer';
import {Link} from "react-router-dom";
const NavBar = (props) => {
    

    return (
      <div>
        <Navbar  bg="dark" variant="dark" fixed="top" expand="lg">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">        
                <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <LoginContainer setIsLoggedIn={props.setIsLoggedIn} />
            </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
  
  export default NavBar;