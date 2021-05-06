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
        <Navbar fixed="top" expand="lg">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">        
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Artiste" id="basic-nav-dropdown">
                  <NavDropdown.Item  as={Link}   to="/artists" onClick={() =>setartistPath("5eda8006d566faf6b952afd3")} >Carna</NavDropdown.Item>
                  <NavDropdown.Item as={Link}   to="/artists"onClick={() =>setartistPath("5eda7fa9d566faf6b952afd2")} >Pepita</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <LoginContainer setIsLoggedIn={props.setIsLoggedIn} isLoggedIn={props.isLoggedIn}  />
            </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
  
  export default NavBar;