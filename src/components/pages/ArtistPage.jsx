import React from 'react';
import '../../App.css';
import NavBarContainer from '../navbar/NavBarContainer';
import { Container } from 'react-bootstrap';
import CategoriesFormContainer from '../forms/CategoriesFormContainer';
import { useLocation } from "react-router";
import { withRouter } from "react-router";

function ArtistPage() {
    let location= useLocation();
    if(location.state!==undefined){
        localStorage.setItem('artist',  location.state.artist_name);
    }
    console.log(" retrieve :"+localStorage.getItem('artist'));
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