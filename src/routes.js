import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import App from './components/app';

export default (
    <Router>
        <Switch>
            <Route path="/" component={App}/>
        </Switch>
    </Router>
)