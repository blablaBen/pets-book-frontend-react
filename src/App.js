import React, { Component } from 'react';
import {Rout} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Login} />
        <Route></Route>
        <Route></Route>
      </div>
    );
  }
}

export default App;
