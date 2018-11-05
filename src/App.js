import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import './App.css';

import Login from './Login/Login'
import AfterLogin from './AfterLogin/AfterLogin'
import { PrivateRoute } from './Components/PrivateRoute';

class App extends Component {
  render() {
    const {isLoggedIn} = this.props;
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/afterLogin" isLoggedIn={isLoggedIn} component={AfterLogin} />
          <Redirect exact from="/" to="/login" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
