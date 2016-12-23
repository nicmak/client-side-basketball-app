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
              getPlayerBoxscores={this.props.getPlayerBoxscores}
              playerStats={this.props.playerStats}
              getPlayerInfo={this.props.getPlayerInfo}

            />
          );
        })}
      </Slider>
    );
  }
}
export default PlayerCards;
