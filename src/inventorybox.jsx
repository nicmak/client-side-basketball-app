import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import '../styles/Inventorybox.css';

import {RaisedButton} from 'material-ui';

export default class InventoryBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }
//--------------------------------------------------------------------
  handleToggle = () => this.setState({open: !this.state.open});

  // deletePlayer = (player) => {
  //   const newState = 
  // }

  //  delete(item){
  //   const newState = this.state.data;
  //   if (newState.indexOf(item) > -1) {
  //     newState.splice(newState.indexOf(item), 1);
  //     this.setState({data: newState})
  //   }
  // }
  //PUT THIS FUNCTION IN APP.JS AND AS WELL MAKE SURE TO DELETE FOR CUSTOM LIST, DO NOT DELETE 
  // THE ACTUAL PLAYER ENTRY IN THE PLAYERS TABLE
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
                  {`${player.first_name} ${player.last_name}`}
                  {`Position: ${player.position}`}
                </div>
              </Paper>
              <FlatButton
                label="Delete"
                onClick={() =>{this.props.deletePlayer(player.id)}}
              />
             </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}
