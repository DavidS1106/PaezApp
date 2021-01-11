import React from 'react';
import {HashRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import ArtistPage from './pages/ArtistPage';
import NavBarContainer from './navbar/NavBarContainer';
import IsConnectedProvider from './context/IsConnectedProvider';
import LoginContainer from './facebook/LoginContainer';
import { Container,Row,Col } from 'react-bootstrap';

function AppRouter(){
    return (
        <div>
                <Router>
                    {/* <LoginContainer/> */}
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