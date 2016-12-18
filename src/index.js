import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './App.jsx';
import '../styles/index.css';

const root = document.getElementById('root')
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>
  ,root);
