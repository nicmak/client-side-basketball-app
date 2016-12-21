import React, {Component} from 'react';
import {Card, CardMedia,CardTitle, CardActions, CardText} from 'material-ui/Card';
import Slider from 'react-image-slider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import '../styles/image-slider.css';
import '../styles/card.css';
import OneCard from './card.jsx'

class PlayerCards extends Component {
  render() {
    return (
      <Slider>
        {this.props.playerData.map((player, key) => {
          <OneCard player={this.player} key={this.key}/>
        })}
      </Slider>
    );
  }
}
export default PlayerCards;
