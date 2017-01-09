

import React, {Component} from 'react';
import '../../styles/InventoryPage.css';
import CustomPlayStats from './CustomPlayStats.jsx'
import FlatButton from 'material-ui/FlatButton';

const handler = () => {
  console.log("hello")
}

const stationComponents = (playerStats = [],key) => {
  console.log(playerStats)
  // if (playerStats.length > 0) {
  console.log("Table is made")
  return playerStats.map((game,key)=> {
    return (
    <table key={key}>
    <tbody >
      <tr>
        <th>Game</th>
        <th>AST</th>
        <th>BLK</th>
        <th>DREB</th>
        <th>FG3A</th>
        <th>FG3M</th>
        <th>FGA</th>
        <th>FGM</th>
        <th>FTA</th>
        <th>FTM</th>
        <th>OREB</th>
        <th>PF</th>
        <th>PTS</th>
        <th>STL</th>
        <th>TOV</th>
      </tr>
      <tr>
        <td>{game.game_id}</td>
        <td>{game.AST}</td>
        <td>{game.BLK}</td>
        <td>{game.DREB}</td>
        <td>{game.FG3A}</td>
        <td>{game.FG3M}</td>
        <td>{game.FGA}</td>
        <td>{game.FGM}</td>
        <td>{game.FTA}</td>
        <td>{game.FTM}</td>
        <td>{game.OREB}</td>
        <td>{game.PF}</td>
        <td>{game.PTS}</td>
        <td>{game.STL}</td>
        <td>{game.TOV}</td>
      </tr>
    </tbody>
    </table>
  )
  });
// }
}

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
                onClick={() => {this.props.getPlayerBoxscores(player.id)}}
                // onClick={()=>{handler()}}

                    // {this.props.getPlayerBoxscores(player.id)}
                />
              </div>
              <div className="Stats" key={index}>
                  { 

                    this.props.playerStats[0].player_id === player.id ?
                    stationComponents(this.props.playerStats)
                    :null
                  }
              </div>
	            
	            
	          </div>
            ))
	      :null
			}
      </div>


			)
	}
}