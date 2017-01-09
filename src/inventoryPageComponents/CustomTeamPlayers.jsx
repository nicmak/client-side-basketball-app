

import React, {Component} from 'react';
import '../../styles/InventoryPage.css';
import CustomPlayStats from './CustomPlayStats.jsx'
import FlatButton from 'material-ui/FlatButton';


export default class CustomTeamPlayers extends Component {




	render () {
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
		              `Name: ${player.first_name} ${player.last_name}
		              Position: ${player.position}`
	              } 
	              <FlatButton
	              label="Statistics"
	              onClick={() =>{this.props.getPlayerBoxscores(player.id)}}
	              />
	            </div>
	            <CustomPlayStats
                playerStatsArray={this.props.playerStatsArray}
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