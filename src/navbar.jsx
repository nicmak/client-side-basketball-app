import React, { Component } from 'react';
import InventoryBox from './inventorybox.jsx'
import Registration from './Registration.jsx';
import Login from './Login.jsx';
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
          teamName={this.props.teamName}
          saveTeam={this.props.saveTeam}
          teamNameSnack={this.props.teamNameSnack}

         />
        <Login/>
        <Registration
          registerUser={this.props.registerUser}
        />
      </div>


   )}
}
export default Navbar;
