import React, {Component} from 'react';
import Slider from 'react-image-slider';
import '../styles/image-slider.css';
import OneCard from './CARD/card.jsx'
import '../styles/TeamCards.css'

class PlayerCards extends Component {
  render() {
    return (
      <Slider>
        {this.props.playersData.map((player, index) => {
          return (
            <OneCard className="teamCards"
              key={index}

              player={player}
              playerInfo={this.props.playerInfo}
              teams={this.props.teams}
              getPlayerBoxscores={this.props.getPlayerBoxscores}
              playerStats={this.props.playerStats}
              getPlayerInfo={this.props.getPlayerInfo}
              customTeams={this.props.customTeams}
              addPlayerCustomTeams={this.props.addPlayerCustomTeams}

            />
          );
        })}
      </Slider>
    );
  }
}
export default PlayerCards;


