import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Register from './Register/Register'
import NotFound from './NotFound/NotFound';

const Routes = (props) => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/register">
            <Register />
        </Route>
        <Route>
            <NotFound />
        </Route>
    </Switch>
);

export default Routes;