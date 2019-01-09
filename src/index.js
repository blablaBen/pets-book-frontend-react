import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleWare from "redux-promise-middleware";
import rootReducer from './rootReducer';
import auth from './User/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const getUserInformationFromSessionStorage = () => {
  if(sessionStorage.getItem('jwt')) {
    auth.isLoggedIn = true;
    return {
      isLoggedIn: true,
      isUserDataFulfield: true, 
      jwt: sessionStorage.getItem('jwt'),
      userData: {
        username: sessionStorage.getItem('username')
      },
      fulfilledUserData: sessionStorage.getItem('fulfilledUserData')
    }
  }

  return undefined;
};
const store = createStore(
  rootReducer,
  getUserInformationFromSessionStorage(),
  composeEnhancers(applyMiddleware(promiseMiddleWare()))
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
