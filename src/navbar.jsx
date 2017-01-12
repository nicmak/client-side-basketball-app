import React, { Component } from 'react';
import InventoryBox from './inventorybox.jsx'
import Registration from './Registration.jsx';
import Login from './Login.jsx';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router'
import '../styles/App.css';
import '../styles/Nav.css'
class Navbar extends Component {

  render () {
    return (

      <div className="Nav">
      <div className="Title">THE BIG O'</div>
        <InventoryBox 
          selectedPlayers={this.props.selectedPlayers}
          deletePlayer={this.props.deletePlayer}
          teamName={this.props.teamName}
          saveTeam={this.props.saveTeam}
          teamNameSnack={this.props.teamNameSnack}
          currentUser={this.props.currentUser}

         />
      <section className="Nav-buttons">
        <div className="Login">
          <Login 
            loginUser={this.props.loginUser}
            LoginError={this.props.LoginError}
          />
        </div>
        {
          sessionStorage.getItem('token')?
          <div className="Logout">
            <FlatButton className="Logout"
              onClick={this.props.logoutUser}
              label="Logout"
            />
          </div>
          :null
        }
        <div className="Customize">
          <FlatButton 
            label="Customize"
            href="/Inventory"
          />
        </div>
        <div className="Register">
          <Registration 
            registerUser={this.props.registerUser}
            RegisterError={this.props.RegisterError}

          />
        </div>
        
      </section>
      </div>


   )}
}
export default Navbar;
