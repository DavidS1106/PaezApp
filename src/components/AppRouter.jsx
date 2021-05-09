import React from 'react';
import {HashRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import ArtistPage from './pages/ArtistPage';
import AuthService from "../utils/AuthService";
import { useState } from 'react';


function AppRouter(){


    const [isLoggedIn, setIsLoggedIn] = useState(AuthService.IsLoggedIn());

    return (
                <Router>
                            <Switch>
                                {/* <Route path="/home">
                                    <WelcomePage className="page" setIsLoggedIn={setIsLoggedIn} />
                                </Route> */}
                                <Route path="/home">
                                    <ArtistPage className="page" setIsLoggedIn={setIsLoggedIn}  />
                                </Route>
                                <Route path="/">
                                    <Redirect to="/home" />
                                </Route>
                            </Switch>
                </Router>
    )
}

export default AppRouter;