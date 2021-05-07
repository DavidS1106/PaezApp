import React from 'react';
import NavBar from './NavBar';
import axios from 'axios'; 
class NavBarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          names:[],
        };
        
      }
      componentDidMount() {
        
    }
      
    render() {
      return (
          <NavBar  setIsLoggedIn={this.props.setIsLoggedIn} isLoggedIn={this.props.isLoggedIn} />
      );
    }
  }
export default NavBarContainer;