import React from 'react';
import '../../App.css';
import NavBarContainer from '../navbar/NavBarContainer';
import { Container } from 'react-bootstrap';
import CategoriesFormContainer from '../forms/CategoriesFormContainer';
import { useLocation } from "react-router";
import { withRouter } from "react-router";

function ArtistPage() {
    let location= useLocation();
    console.log(" retrieve :"+location.state);
    return (
        <div>
            <Container>
                <CategoriesFormContainer/>
            </Container>
            <NavBarContainer/>
        </div>
    );
}

export default withRouter(ArtistPage);