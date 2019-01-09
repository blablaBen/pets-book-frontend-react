import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { HashRouter as Router } from 'react-router-dom';
import { shallow } from "enzyme";

it('renders without crashing', () => {
  const wrapper = shallow(
    <Router><App/></Router>
  );
  expect(wrapper.contains(<div></div>)).toEqual(true);
});
