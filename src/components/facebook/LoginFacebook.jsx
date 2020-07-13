import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { Button } from 'react-bootstrap';
//import ReactDOM from 'react-dom';
const LoginFacebook = (props) => {
    
    const reponseFacebook = (response) => {
        console.log(response);
        if(response.accessToken!== null && response.accessToken!==undefined){
            props.loggedIn(response);
        }
    }
  
    if(props.state.isLoggedIn===false){
        return(
            <FacebookLogin
            appId="692156871634804"
            autoLoad={true}
            fields="name,email,picture"
            callback={reponseFacebook}
            cssClass="btnFacebook"
            icon="fa-facebook"
            />
        )
    }
    else{ 
        return(
            <div style={{
                width:'400px',
                margin:'auto',
                background:'f4f4f4',
                padding:'20px'
            }}>
                <img src={props.state.picture.data.url} alt={props.state.name}/>
                <br></br>
                <p>Bienvenue {props.state.name}</p>
                <Button onClick={props.loggedOut} variant="primary" id="deco_facebook">Se déconnecter</Button>
            </div>
        )
    }
    
  }
  
  export default LoginFacebook;