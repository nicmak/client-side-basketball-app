import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';
import '../../styles/card.css';
import {red900} from 'material-ui/styles/colors';
import Time from 'react-time';




const stationComponents = (playerStats = []) => {
  playerStats.sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date)
  })
  return playerStats.map((game)=> {
    let date = Date.parse(game.date)
    if (game.FGA) {
      return (
        <tr>
          <td>{game.home_nba_code} @ {game.away_nba_code}</td>
          <td>{game.home_score} @ {game.away_score}</td>
          <td><Time value={date} format="MM/DD"/></td>
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
    }
    else {
      return (
        <tr>
          <td>{game.home_nba_code} @ {game.away_nba_code}</td>
          <td>{game.home_score} @ {game.away_score}</td>
          <td><Time value={date} format="MM/DD"/></td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      )
    }
    
  });
}
export default class OneSwipeableView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    }
  }

  handleTab = (value) => {
   this.setState({
     slideIndex: value,
   });
  };

  render() {
    const player = this.props.player
    const key = this.props.key
    return (
      <div>
        <Tabs className="tabs"
          onChange = {this.handleTab}
          value = {this.state.slideIndex}
        >
          <Tab
            style={{color:"Black", backgroundColor:red900}}
            label="PROFILE" value={0}
          />
          <Tab
            style={{color:"Black", backgroundColor:red900}}
            label="STATISTICS"
            value={1}
          />
          
        </Tabs>
        <SwipeableViews className="views"
          index={this.state.slideIndex}
          onChangeIndex={this.handleTab}
        >
          <div className="Biology">
            <img src={player.head_shot}/>
            <div className="playerInfo">
              Name: {`${player.first_name} ${player.last_name}`}<br/><br/>
              Position: {player.position}<br/><br/>
              College: {player.college}<br/><br/>
              Height: {player.height} (FT- INCH)<br/><br/> 
              Weight: {player.weight} LBS
            </div>
          </div>
          <div className="Stats">
            <table className="Table" cellpadding="10">
              <tbody>
                <tr>
                  <th>Game</th>
                  <th>Score</th>
                  <th>Date</th>
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
                    stationComponents(this.props.playerStats)
                  }
              </tbody>
            </table>
          </div>
        </SwipeableViews>
      </div>
    )
  }
}
