import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import './App.css';

import Login from './Login/Login'
import { PrivateRoute } from './Components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div>
        <Redirect from="/" to="/login" />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/feed" component={Login}></PrivateRoute>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenthicated: state.user.isAuthenthicated
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
