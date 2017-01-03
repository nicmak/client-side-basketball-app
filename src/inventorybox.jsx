import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

import {deepOrange500} from 'material-ui/styles/colors';


import '../styles/Inventorybox.css';

import {RaisedButton} from 'material-ui';

export default class InventoryBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      open2: false,
      teamName:""
    }
  }
//--------------------------------------------------------------------
  handleToggle = () => this.setState({open: !this.state.open});
  
  handlerSnack = () => {
    console.log("HandlerSnacker")
    this.setState({
      open2: !this.state.open2
    })
  }

  handleTeamName = (event) => {
    console.log("hi")
    this.setState({teamName:event.target.value})
    console.log(this.state.teamName)
  }

  
//--------------------------------------------------------------------

  render() {

    const style = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    return (
       <div>
         <RaisedButton
           onClick={this.handleToggle}
           label="Inventory"
         />
        <Drawer
          className="Background"
          width={400}
          openSecondary={true}
          open={this.state.open}
        >
          <AppBar title="User's Inventory"/>
          <FlatButton
            onClick={this.handleToggle}
            label="Close"
          />
          <FlatButton
            onClick={() => {this.props.saveTeam(this.state.teamName);this.handlerSnack()}}
            label="Save"
          />
          <TextField
            className="CustomTeam"
            hintText="Custom Team #1"
            floatingLabelText="Please Enter Team Name"
            floatingLabelStyle={{color: deepOrange500}}
            onChange={this.handleTeamName}
          />

          <List>
            {this.props.selectedPlayers.map((player, index) => (
            <ListItem className="playerBox"
              disabled={true}
              key={index}
            >
              <Paper style={style} zDepth={3} size={40}>
                <img
                  className="playerImg"
                  src={player.head_shot}
                />
                <div className="title">
                  {
                    `Name: ${player.first_name} ${player.last_name}
                    Position: ${player.position}`
                  }
                  
                </div>
              </Paper>
              <FlatButton
                label="Delete"
                onClick={() =>{this.props.deletePlayer(player)}}
              />
             </ListItem>
            ))}
          </List>
        </Drawer>
        <Snackbar className="SnackbarInventory"
          open={this.state.open2}
          message={`${this.state.teamName} was added`}
        />
      </div>
    );
  }
}
