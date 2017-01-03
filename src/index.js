import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './App.jsx';
import InventoryPage from './InventoryPage.jsx'
import '../styles/index.css';
import ReactDriveIn from 'react-drive-in';

const root = document.getElementById('root')
ReactDOM.render(
	<div>
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    {/* <Route path="/InventoryPage/:id" component={InventoryPage}/> */}
  </Router>
  </div>
  ,root);
