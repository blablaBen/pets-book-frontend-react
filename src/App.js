import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import './App.css';

import Login from './Login/Login'
import Feed from './Feed/Feed'
import { PrivateRoute } from './Components/PrivateRoute';

class App extends Component {
  render() {
    const {isAuthenthicated} = this.props;
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/feed" isAuthenthicated={isAuthenthicated} component={Feed} />
          <Redirect exact from="/" to="/login" />
        </Switch>
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
