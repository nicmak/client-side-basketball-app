import React, {Component} from 'react';




// const getPlayerStatsArrays = (playerStatsArrays) => {
//   return playerStatsArrays.forEach((playerStatsArray) => {
//      // stationComponents(playerStatsArray);
//   })
// }

const stationComponents = (playerStats = []) => {
  return playerStats.map((game)=> {
    return (
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
  )
  });
}

export default class CustomPlayStats extends Component {

  render() {
// console.log("playerStatsArray on CustomPlayStats",this.props.playerStatsArray)
  	return (
      <div className="Stats">
            <table>
              <tbody>
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
                  {
                    // getPlayerStatsArrays(this.props.playerStatsArray)
                    stationComponents(this.props.playerStats)
                  }
              </tbody>
            </table>
      </div>
    

  	)
  }



}