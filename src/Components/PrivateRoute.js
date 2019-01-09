import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, isLoggedIn: Test, ...rest }) => (
    <Route {...rest} render={props => (
        Test
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)
export default PrivateRoute;


