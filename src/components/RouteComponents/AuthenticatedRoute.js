import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthenticatedRoute = ({ 
    children, 
    ...rest }) => {

    const { pathname, search } = useLocation();
    const { isAuthenticated } = Cookies.get('access_token_cokies') !== null;
    return (
        <Route {...rest}>
            {isAuthenticated ? (
                children
            ) : (
                <Redirect to={
                    `/login?redirect=${pathname}${search}`
                } />
            )}
        </Route>
    );
}

export default AuthenticatedRoute;