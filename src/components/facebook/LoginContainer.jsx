import React from 'react';
import LoginFacebook from './LoginFacebook';
import axios from 'axios';
//import IsConnectedContext from '../context/IsConnectedContext';
//import { Button, Form,Table, ListGroup, Modal, Row, Col, Container } from 'react-bootstrap';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          isLoggedIn:this.props.isLoggedIn,
        };
        this.LogginHandler=this.LogginHandler.bind(this);
        this.LoggoutHandler=this.LoggoutHandler.bind(this);
      }
      componentDidMount() {

      }
      LogginHandler(e){
        e.preventDefault();
        console.log("login");
        axios.post('http://localhost:8080/users/authenticate', {userName:e.target.login.value, password:e.target.password.value})
        .then(result =>{
          sessionStorage.setItem('Token',result.data.Token)
          this.props.setIsLoggedIn(true);       
          this.setState({isLoggedIn:this.props.isLoggedIn});
        })
        .catch(error =>{
            console.log("error: "+error);
        });
        
      }
      
      //Logout
      LoggoutHandler(){
        console.log("log out");
        sessionStorage.setItem('Token',undefined);
        this.props.setIsLoggedIn(false);
        this.setState({isLoggedIn:this.props.isLoggedIn});
      }
      
    render() {
      return (
        <div>
          <LoginFacebook key={this.props.isLoggedIn} isLoggedIn={this.props.isLoggedIn} loggedOut={this.LoggoutHandler} loggedIn={this.LogginHandler}/>
        </div>
      );
    }
  }
export default LoginContainer;