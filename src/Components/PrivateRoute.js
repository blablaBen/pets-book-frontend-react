import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import auth from '../User/auth';

const PrivateRoute = ({ component: Component, isLoggedIn: Test, ...rest }) => (
    <Route {...rest} render={props => (
        auth.isLoggedIn
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)
export default PrivateRoute;


