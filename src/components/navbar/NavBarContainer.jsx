import React from 'react';
import NavBar from './NavBar';

class NavBarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          isLoggedIn:false,
          name:null,
          token:null,
          email:null,
          id:null,
          picture:null,
          userId:null
        };
        this.LogginHandler=this.LogginHandler.bind(this);
      }

      LogginHandler(data){
        this.setState({
          isLoggedIn:true,
          name:data.name,
          token:data.accesToken,
          email:data.email,
          id:data.id,
          picture:data.picture,
          userId:data.userId});
      }
    render() {
      return (
          <NavBar state={this.state} loggedIn={this.LogginHandler}/>
      );
    }
  }
export default NavBarContainer;