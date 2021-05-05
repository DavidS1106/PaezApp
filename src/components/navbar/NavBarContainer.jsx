import React from 'react';
import NavBar from './NavBar';

class NavBarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          
        };
      }

      
    render() {
      return (
          <NavBar setIsLoggedIn={this.props.setIsLoggedIn} isLoggedIn={this.props.isLoggedIn} />
      );
    }
  }
export default NavBarContainer;