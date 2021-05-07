import React from 'react';
import '../../App.css';
import {Link} from "react-router-dom";
import accueil from '../../imgs/paezapp.png';
import carna from '../../imgs/carna.png';
import pepita from '../../imgs/pepita.png';
import title from '../../imgs/phrase.png';
import Pic from 'react-bootstrap/Image';
import NavBarContainer from '../navbar/NavBarContainer';
import { Container,Row,Col } from 'react-bootstrap';
function WelcomePage(props) {
   
    return (
        <div id="welcome-page">
            <NavBarContainer  setIsLoggedIn={props.setIsLoggedIn} isLoggedIn={props.isLoggedIn}/>
            <Container fluid>
                <Row >
                    <Col className="parent-title">
                        <Pic className='accueil-title' src={title} alt="t" fluid  />
                    </Col>
                </Row>
                <Row >
                    <Col className="parent-accueil">
                        <Link to={{ pathname:"/artists", state: { artist_id: "4" }}}>
                        <Pic  className='accueil-button' src={pepita} alt="p" fluid roundedCircle />
                        </Link>                        
                    </Col>
                    <Col  className="parent-accueil">
                        <Pic className='accueil_image' src={accueil} alt="Accueil" fluid roundedCircle />
                    </Col>
                    <Col className="parent-accueil">
                        <Link to={{ pathname:"/artists", state: { artist_id: "5" }}}>
                        <Pic  className='accueil-button' src={carna} alt="p" fluid roundedCircle />
                        </Link>    
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default WelcomePage;