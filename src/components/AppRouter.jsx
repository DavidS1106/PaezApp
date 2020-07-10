import React from 'react';
import {HashRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import ArtistPage from './pages/ArtistPage';
import NavBarContainer from './navbar/NavBarContainer';
function AppRouter(){
    return (
        <div>
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
                <NavBarContainer/>
            </Router>
        </div>
    )
}

export default AppRouter;