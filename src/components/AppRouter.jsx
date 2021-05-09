import React from 'react';
import {HashRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import ArtistPage from './pages/ArtistPage';
import { useState } from 'react';


function AppRouter(){

    let isTokenDefined=false;
    if(sessionStorage.getItem('Token')!=="undefined"){
        isTokenDefined=true;
    }

    const [isLoggedIn, setIsLoggedIn] = useState(isTokenDefined);

    return (
                <Router>
                            <Switch>
                                {/* <Route path="/home">
                                    <WelcomePage className="page" setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
                                </Route> */}
                                <Route path="/home">
                                    <ArtistPage className="page" setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
                                </Route>
                                <Route path="/">
                                    <Redirect to="/home" />
                                </Route>
                            </Switch>
                </Router>
    )
}

export default AppRouter;