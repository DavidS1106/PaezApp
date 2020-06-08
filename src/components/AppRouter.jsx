import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";

function AppRouter(){
    return (
        <Router>
            <Route component={WelcomePage}/>
        </Router>
    )
}