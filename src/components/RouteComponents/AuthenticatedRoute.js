import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selectors';


const AuthenticatedRoute = ({
    currentUser, 
    children, 
    ...rest }) => {

    return (
        <Route {...rest}>
            {currentUser ? (
                children
            ) : (
                <Redirect to='/signin'/>
            )}
        </Route>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(AuthenticatedRoute);