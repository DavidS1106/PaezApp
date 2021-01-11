import React from 'react';
import '../../App.css';
import { Container } from 'react-bootstrap';
import { useLocation } from "react-router";
import IsConnectedProvider from '../context/IsConnectedProvider';


function ArtistPage() {
    
    let location= useLocation();
    if(location.state!==undefined){
        localStorage.setItem('artist',  location.state.artist_name);
    }
    
    let tab_users=JSON.parse(localStorage.getItem('admins'));
    
    for(let i=0;i<tab_users.length;i++){
        if(localStorage.getItem('artist')===tab_users[i].prenom){
            localStorage.setItem('id_artist',  tab_users[i]._id);
        }
    }

    return (
        <div>
            <Container>
                <IsConnectedProvider/>
            </Container>
        </div>
    );
}

export default ArtistPage