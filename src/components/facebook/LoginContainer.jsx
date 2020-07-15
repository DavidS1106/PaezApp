import React from 'react';
import LoginFacebook from './LoginFacebook';

class LoginContainer extends React.Component {
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
        this.LoggoutHandler=this.LoggoutHandler.bind(this);
      }

      LogginHandler(data){
        if(this.state.isLoggedIn===false){
          this.setState({
            isLoggedIn:true,
            name:data.name,
            token:data.accesToken,
            email:data.email,
            id:data.id,
            picture:data.picture,
            userId:data.userId
          });
          let test_id=JSON.parse(localStorage.getItem('admins'));
          console.log("id: "+test_id[0].facebook_id);
        }
      }
      LoggoutHandler(){
        console.log("deconnexion effectuee");
        this.setState({
          isLoggedIn:false,
          name:null,
          token:null,
          email:null,
          id:null,
          picture:null,
          userId:null
        });
      }
      
    render() {
      return (
          <LoginFacebook state={this.state} loggedOut={this.LoggoutHandler} loggedIn={this.LogginHandler}/>
      );
    }
  }
export default LoginContainer;