import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Login from './Login/Login'

class App extends Component {
  render() {
    return (

        <Route exact path="/" component={Login} />
     
    );
  }
}

export default App;
