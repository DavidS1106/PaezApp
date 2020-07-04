import React from 'react';
import {HashRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import ArtistPage from './pages/ArtistPage';
function AppRouter(){
    return (
        <Router>
                <Switch>
                <Route path="/home">
                    <WelcomePage />
                </Route>
                <Route path="/artists">
                    <ArtistPage />
                </Route>
                <Route path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;