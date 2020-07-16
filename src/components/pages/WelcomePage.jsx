import React from 'react';
import '../../App.css';
import NameContainer from '../names/NameContainer';
import { Container } from 'react-bootstrap';
import accueil from '../../imgs/paezapp.png';
import Pic from 'react-bootstrap/Image'
function WelcomePage() {
    return (
        <div>
            <Container>
                <Pic className='accueil_image' src={accueil} alt="Accueil" fluid roundedCircle />
            </Container>
                <NameContainer/>
        </div>
    );
}

export default WelcomePage;