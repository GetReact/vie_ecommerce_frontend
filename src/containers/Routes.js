import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Register from './Register/Register';
import NotFound from './NotFound/NotFound';
import ProductPage from './ProductPage/ProductPage';

const Routes = (props) => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/register">
            <Register />
        </Route>
        <Route exact path="/shop">
            <ProductPage />
        </Route>
        <Route>
            <NotFound />
        </Route>
    </Switch>
);

export default Routes;