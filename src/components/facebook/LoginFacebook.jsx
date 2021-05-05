import React, { useState, useEffect } from 'react';
import { Button, Form,  Modal/*, Row, Col, Container*/ } from 'react-bootstrap';
//import {Redirect} from "react-router-dom";

const LoginFacebook = (props) => {
    
    const [isModalConnectionNeeded, setModalConnection] = useState(false);

    useEffect(() => {
        //console.log(isModalConnectionNeeded);
    });


    if(props.isLoggedIn===false){
        return(
            <div>
                <Button onClick={() => setModalConnection(true)} variant="primary">Se connecter</Button>

                <Modal show={isModalConnectionNeeded}  onHide={() => setModalConnection(false)}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={props.loggedIn}>
                            <Form.Group controlId="login">
                                <Form.Control name="login" type="text" placeholder="Login" ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Control name="password" type="password" placeholder="Password" ></Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Valider
                            </Button>
                        </Form>  
                    </Modal.Body>
                </Modal>             
            </div>
        )
    }
    else{ 
        return(
            <div>
                <Button onClick={props.loggedOut} variant="primary" >Se déconnecter</Button>               
            </div>
        )
    }
    
  }
  
  export default LoginFacebook;