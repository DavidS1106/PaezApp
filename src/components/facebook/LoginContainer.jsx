import React, {useContext} from 'react';
import LoginFacebook from './LoginFacebook';
import AuthService from "../../utils/AuthService";
import axios from 'axios';


class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          isLoggedIn:AuthService.IsLoggedIn(),
          isAlertDisplayed: false,
        };
        this.LogginHandler=this.LogginHandler.bind(this);
        this.LoggoutHandler=this.LoggoutHandler.bind(this);
        this.displayAlert=this.displayAlert.bind(this);
      }
      componentDidMount() {
      }

      LogginHandler(e){
        e.preventDefault();
        console.log("login");
        axios.post('https://paezappsabo.herokuapp.com/users/authenticate', {userName:e.target.login.value, password:e.target.password.value})
        .then(result =>{
          sessionStorage.setItem('Token',result.data.Token);   
          this.setState({isLoggedIn:AuthService.IsLoggedIn(), isAlertDisplayed:false});
          this.props.setIsLoggedIn(AuthService.IsLoggedIn());
        })
        .catch(error =>{
            console.log("error: "+error);
            this.setState({isAlertDisplayed:true});
        });
        
      }
      displayAlert(boolean){
        this.setState({isAlertDisplayed:boolean});
      }
      //Logout
      LoggoutHandler(){
        console.log("log out");
        sessionStorage.setItem('Token',null);
        
        this.setState({isLoggedIn:AuthService.IsLoggedIn()});
        this.props.setIsLoggedIn(AuthService.IsLoggedIn());
      }
      
    render() {
      return (
        <div>
          <LoginFacebook displayAlert={this.displayAlert} alert={this.state.isAlertDisplayed} key={this.state.isLoggedIn} isLoggedIn={this.state.isLoggedIn} loggedOut={this.LoggoutHandler} loggedIn={this.LogginHandler}/>
        </div>
      );
    }
  }
export default LoginContainer;