import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';
import '../../styles/card.css';
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
            <table>
              <tr>
                <th>Game</th>
                <th>FGA</th>
                <th>FGM</th>
                <th>FTA</th>
                <th>FTM</th>
              </tr>
              <tr></tr>
            </table>
          </div>
        </SwipeableViews>
      </div>
    )
  }
}
