import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute} from 'react-router';
import App from './App.jsx';
import InventoryPage from './InventoryPage.jsx'
import '../styles/index.css';
import Blank from './Blank.jsx'

export default (
  <Route path="/" component={Blank}>
      <IndexRoute component={App}/>
      <Route path='Inventory' component={InventoryPage}/>
  </Route>
)