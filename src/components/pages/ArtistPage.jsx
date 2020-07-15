import React from 'react';
import '../../App.css';
import { Container } from 'react-bootstrap';
import CategoriesFormContainer from '../forms/CategoriesFormContainer';
import { useLocation } from "react-router";

function ArtistPage() {
    let location= useLocation();
    if(location.state!==undefined){
        localStorage.setItem('artist',  location.state.artist_name);
    }
    console.log(" retrieve :"+localStorage.getItem('artist'));
    let tab_users=JSON.parse(localStorage.getItem('admins'));
    console.log(tab_users);
    for(let i=0;i<tab_users.length;i++){
        if(localStorage.getItem('artist')===tab_users[i].prenom){
            localStorage.setItem('id_artist',  tab_users[i]._id);
        }
    }
    return (
        <div>
            <Container>
                <CategoriesFormContainer/>
            </Container>
        </div>
    );
}

export default ArtistPage