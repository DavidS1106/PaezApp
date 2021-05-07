import React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import LoginContainer from '../facebook/LoginContainer';
import {Link} from "react-router-dom";
const NavBar = (props) => {
    
    function setartistPath(artist){
      localStorage.setItem('id_artist',artist);
      console.log("changed artist");
      console.log(localStorage.getItem('id_artist'));
    }
    return (
      <div>
        <Navbar  bg="dark" variant="dark" fixed="top" expand="lg">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">        
                <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <LoginContainer setIsLoggedIn={props.setIsLoggedIn} isLoggedIn={props.isLoggedIn}  />
            </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
  
  export default NavBar;