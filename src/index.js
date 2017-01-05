import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App.jsx';
import InventoryPage from './InventoryPage.jsx'
import '../styles/index.css';
import Blank from './Blank.jsx'
import routes from './routes.jsx'
const root = document.getElementById('root')
ReactDOM.render(
  <Router history={browserHistory} routes={routes}/>,root);



