import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

export default (
    <Router>
        <Route exact path="/" component={App}/>
        <Switch>
            <Route exact path="/post" component={PostsIndex}/>
            <Route path="/post/new" component={PostsNew}/>
        </Switch>
    </Router>
);