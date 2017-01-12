import React, {Component} from 'react';
import '../../styles/InventoryPage.css';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import CustomPlayStats from './CustomPlayStats.jsx'
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';
import CustomDialog from './CustomDialog.jsx'


export default class CustomTeamPlayers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handlerValue : false
     
    }
  }
  
  handlerForStats = () => {
    this.setState({handlerValue : !this.state.handlerValue})
  }

 


  render () {
  	console.log(this.props.customTeamID)
		return (
			<div>
			{
				this.props.playerArray ?
	      this.props.playerArray.map((player, index) => (
	          <div
	           key={index}
	          >
	            <img
	              src={player.head_shot}
	            />
	            <div className="playerText">
	              {
		              `${player.first_name} ${player.last_name}
		              Position: ${player.position}`
	              } 
	              <FlatButton
	              label="Statistics"
                onClick={() => {this.props.getPlayerBoxscores(player.id);this.handlerForStats()}}
                />
                <FlatButton
	              label="Remove"
                onClick={() => {this.props.deleteCustomTeamPlayer(this.props.customTeamID,player.id)}}
                />
              </div>
              <CustomDialog
                handlerForStats={this.handlerForStats}
                handlerValue={this.state.handlerValue}
                player={player}
                playerStats={this.props.playerStats}
              />
	          </div>


            







            ))
	      :null
			}
      
      </div>
			)
	}
}