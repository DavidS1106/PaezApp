import React, { useState } from 'react';
import '../../App.css';
import { useLocation } from "react-router";
import NavBarContainer from '../navbar/NavBarContainer';
import CategoriesFormContainer from '../forms/CategoriesFormContainer';


function ArtistPage(props) {
    const [idArtist, setidArtist] = useState(0);

    let location= useLocation();
    if(location.state!==undefined){
        localStorage.setItem('artist_id',  location.state.artist_id);
    }
    

    return (
        <React.Fragment>
                <NavBarContainer  setIsLoggedIn={props.setIsLoggedIn} isLoggedIn={props.isLoggedIn}/>
                <CategoriesFormContainer isLoggedIn={props.isLoggedIn} />
        </React.Fragment>
        
    );
}

export default ArtistPage