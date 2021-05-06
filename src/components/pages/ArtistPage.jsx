import React, { useState } from 'react';
import '../../App.css';
import { useLocation } from "react-router";
import NavBarContainer from '../navbar/NavBarContainer';
import CategoriesFormContainer from '../forms/CategoriesFormContainer';


function ArtistPage(props) {
    const [idArtist, setidArtist] = useState(0);

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
        <React.Fragment>
                <NavBarContainer  setIsLoggedIn={props.setIsLoggedIn} isLoggedIn={props.isLoggedIn}/>
                <CategoriesFormContainer isLoggedIn={props.isLoggedIn} />
        </React.Fragment>
        
    );
}

export default ArtistPage