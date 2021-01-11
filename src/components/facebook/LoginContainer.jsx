import React from 'react';
import LoginFacebook from './LoginFacebook';
import IsConnectedContext from '../context/IsConnectedContext';
//import {Redirect} from "react-router-dom";

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        // let token=localStorage.getItem('token');
        // let islogged=false;
        // if(token!=null){
        //   islogged=true;
        // }
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
      //Login
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
          localStorage.setItem('token',data.accesToken);
          let admins_list=JSON.parse(localStorage.getItem('admins'));
          for(let i=0;i<admins_list.length;i++){
            console.log("admin_id: "+admins_list[i].facebook_id);
            if(admins_list[i].facebook_id===this.state.id){
              localStorage.setItem('isAdmin','true');
            }
          }
          this.props.logIn();          
        }
      }
      //Logout
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
        localStorage.setItem('token',null);
        localStorage.setItem('isAdmin','false');
        this.props.logOut();
      }
      
    render() {
      return (
        <div>
          <LoginFacebook state={this.state} loggedOut={this.LoggoutHandler} loggedIn={this.LogginHandler}/>
          <IsConnectedContext.Provider value={this.state.isLoggedIn}/>
        </div>
      );
    }
  }
export default LoginContainer;