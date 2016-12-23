import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';
import '../../styles/card.css';

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



  // showPlayerStats = () => {
  //   const playerStats = this.props.playerStats
  //   playerStats.map((game) => {
  //     return
  //       <tr>
  //         <td>{game.Game}</td>
  //         <td>{game.AST}</td>
  //         <td>{game.BLK}</td>
  //         <td>{game.DREB}</td>
  //         <td>{game.FG3A}</td>
  //         <td>{game.FG3M}</td>
  //         <td>{game.FGA}</td>
  //         <td>{game.FGM}</td>
  //         <td>{game.FTA}</td>
  //         <td>{game.FTM}</td>
  //         <td>{game.OREB}</td>
  //         <td>{game.PF}</td>
  //         <td>{game.PTS}</td>
  //         <td>{game.STL}</td>
  //         <td>{game.TOV}</td>
  //       </tr>
  //     })
  // }

  render() {
    console.log("Swipeview component", this.props.playerStats)

    const player = this.props.player
    const key = this.props.key
    return (
      <div>
        <Tabs className="tabs"
          onChange = {this.handleTab}
          value = {this.state.slideIndex}
        >
          <Tab label="BIO" value={0}/>
          <Tab label="Statistics" value={1}/>
          <Tab label="Other" value={2}/>
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
              {/* College: {player.college}<br/><br/> */}
              {/* Height: {player.height}<br/><br/> */}
              {/* Weight: {player.weight} */}
            </div>
          </div>
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
