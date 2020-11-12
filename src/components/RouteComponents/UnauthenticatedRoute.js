import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const querystring = (name, url = window.location.href) => {
    name = name.replace(/[[]]/g, "\\$&");
  
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
    const results = regex.exec(url);
  
    if (!results) {
        return null;
    }
    if (!results[2]) {
        return "";
    }
  
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const UnauthenticatedRoute = ({ 
    children, 
    ...rest }) => {
    const { isAuthenticated } = Cookies.get('access_token_cokies') !== null;
    const redirect = querystring("redirect");
    return (
        <Route {...rest}>
            {!isAuthenticated ? (
                children
            ) : (
                <Redirect to={redirect === "" || redirect === null ? "/" : redirect} />
            )}
        </Route>
    );
}

export default UnauthenticatedRoute;