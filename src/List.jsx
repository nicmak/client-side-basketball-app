import React, {Component} from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import '../styles/Inventorybox.css';
import {deepOrange500} from 'material-ui/styles/colors';




export default class OneList extends Component {
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
      </div>

		)
	}
}