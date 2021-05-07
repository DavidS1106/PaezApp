import React, { useState, useEffect } from 'react';
import { Button, Form, Alert,  Modal/*, Row, Col, Container*/ } from 'react-bootstrap';
//import {Redirect} from "react-router-dom";

const LoginFacebook = (props) => {
    
    const [isModalConnectionNeeded, setModalConnection] = useState(false);
    const [isConnectionFailed, setConnectionFailed]=useState(props.alert);
    useEffect(() => {
        setConnectionFailed(props.alert);
    });

    function closeModal(){
        console.log(isModalConnectionNeeded);
        setConnectionFailed(false);
        setModalConnection(false);
        console.log(isModalConnectionNeeded);
        props.displayAlert(false);
    }

    if(props.isLoggedIn===false){
        return(
            <div>
                <Button onClick={() => setModalConnection(true)} variant="dark">Se connecter</Button>

                <Modal show={isModalConnectionNeeded}  onHide={() => closeModal()}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Form onSubmit={props.loggedIn}>
                    <Modal.Body>
                            <Form.Group  controlId="login">
                                <Form.Control  name="login" type="text" placeholder="Login" ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Control name="password" type="password" placeholder="Password" ></Form.Control>
                            </Form.Group>
                            {
                                isConnectionFailed ?   
                            <Alert  variant='danger'>
                                Nom ou mot de passe invalide
                            </Alert> : null
                            }
                            <Button  className="validateLogin-button" variant="dark" type="submit">
                                Valider
                            </Button>
                    </Modal.Body>
                    </Form>  
                </Modal>             
            </div>
        )
    }
    else{ 
        return(
            <div>
                <Button onClick={props.loggedOut} variant="dark" >Se déconnecter</Button>               
            </div>
        )
    }
    
  }
  
  export default LoginFacebook;