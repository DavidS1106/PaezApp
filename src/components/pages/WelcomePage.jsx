import React from 'react';
import '../App.css';
import ImgContainer from '../images/ImgContainer';
import NameContainer from '../names/NameContainer';
import NavBarContainer from '../navbar/NavBarContainer';
import { Container } from 'react-bootstrap';

function WelcomePage() {
    return (
        <div class="all">
            <Container>
            <ImgContainer nom='Accueil'/>
            </Container>
            <NameContainer/>
            <NavBarContainer/>
        </div>
    );
}

export default WelcomePage;