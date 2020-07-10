import React from 'react';
import '../../App.css';
import ImgContainer from '../images/ImgContainer';
import NameContainer from '../names/NameContainer';
import { Container } from 'react-bootstrap';

function WelcomePage() {
    return (
        <div>
            <Container>
            <ImgContainer nom='Accueil'/>
            </Container>
            <NameContainer/>
        </div>
    );
}

export default WelcomePage;