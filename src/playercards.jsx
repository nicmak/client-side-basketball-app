import React, {Component} from 'react';
import Slider from 'react-image-slider';
import '../styles/image-slider.css';
import OneCard from './CARD/card.jsx'

class PlayerCards extends Component {
  render() {
    return (
      <Slider>
        {
          this.props.playersData.map((player, key) => {
            //  console.log(player)
            <OneCard
              player={this.player}
              key={this.key}
            />
          })
        }
      </Slider>
    );
  }
}
export default PlayerCards;
