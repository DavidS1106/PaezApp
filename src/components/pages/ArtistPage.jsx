import React from 'react';
import '../../App.css';
import NavBarContainer from '../navbar/NavBarContainer';
import { Container } from 'react-bootstrap';
import CategoriesFormContainer from '../forms/CategoriesFormContainer';

function ArtistPage() {
    return (
        <div>
            <Container>
                <CategoriesFormContainer/>
            </Container>
            <NavBarContainer/>
        </div>
    );
}

export default ArtistPage;