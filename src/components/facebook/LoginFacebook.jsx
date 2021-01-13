import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { Button } from 'react-bootstrap';
import {Redirect} from "react-router-dom";
import Pic from 'react-bootstrap/Image';

const LoginFacebook = (props) => {
    
    const reponseFacebook = (response) => {
        console.log(response);
        if(response.accessToken!== null && response.accessToken!==undefined){
            props.loggedIn(response);
        }
    }
  
    if(props.state.isLoggedIn===false){
        return(
            <div>
                <FacebookLogin
                appId="692156871634804"
                autoLoad={props.state.isLoggedIn}
                fields="name,email,picture"
                callback={reponseFacebook}
                cssClass="btnFacebook"
                icon="fa-facebook"
                />
                
            </div>
        )
    }
    else{ 
        return(
            <div style={{
                width:'400px',
                margin:'auto',
                background:'f4f4f4',
                padding:'10px',
                position: 'absolute',
                right: '1px',
                top: '5px',
            }}>
                <Pic src={props.state.picture.data.url} alt={props.state.name} fluid roundedCircle/>
                <br></br>
                <p>Bienvenue {props.state.name}</p>
                <Button onClick={props.loggedOut} variant="primary" id="deco_facebook">Se déconnecter</Button>
                
            </div>
        )
    }
    
  }
  
  export default LoginFacebook;