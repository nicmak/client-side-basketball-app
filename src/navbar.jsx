import React, { Component } from 'react';
import InventoryBox from './inventorybox.jsx'
import Registration from './Registration.jsx';
import FlatButton from 'material-ui/FlatButton';
import '../styles/App.css';
class Navbar extends Component {

  render () {



    return (

      <div className="Nav">
        Basketball
        <InventoryBox 
          selectedPlayers={this.props.selectedPlayers}
          deletePlayer={this.props.deletePlayer}
         />
        
        <Registration
          registerUser={this.props.registerUser}
        />
      </div>


   )}
}
export default Navbar;
