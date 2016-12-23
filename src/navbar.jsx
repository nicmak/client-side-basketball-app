import React, { Component } from 'react';
import InventoryBox from './inventorybox.jsx'
import signUp from './signUp.jsx';
import '../styles/App.css';
class Navbar extends Component {

  render () {



    return (

      <div className="Nav">
        Basketball
        <InventoryBox addedPlayers={this.props.addedPlayers}/>
      </div>


   )}
}
export default Navbar;
