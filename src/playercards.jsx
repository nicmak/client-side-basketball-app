import React, {Component} from 'react';
import Slider from 'react-image-slider';
import '../styles/image-slider.css';
import OneCard from './CARD/card.jsx'

class PlayerCards extends Component {
  render() {
    return (
      <Slider>
        {this.props.playersData.map((player, key) => {
          return (
            <OneCard
              player={player}
              playerInfo={this.props.playerInfo}
              key={key}
              teams={this.props.teams}
              getPlayerInfo={this.props.getPlayerInfo}
              getPlayerBoxscores={this.props.getPlayerBoxscores}
              playerStats={this.props.playerStats}

            />
          );
        })}
      </Slider>
    );
  }
}
export default PlayerCards;
