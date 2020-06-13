import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import WelcomePage from './WelcomePage';
function AppRouter(){
    return (
        <Router>
            <Route component={WelcomePage}/>
        </Router>
    )
}

export default AppRouter;