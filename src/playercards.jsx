import React, {Component} from 'react';
import {Card, CardMedia,CardTitle, CardActions} from 'material-ui/Card';
import Slider from 'react-image-slider';
import FlatButton from 'material-ui/FlatButton';
import '../styles/image-slider.css';
import '../styles/card.css';

class playerCards extends Component {
    render() {
      return (
        <Slider>
          {this.props.playerData.map((player,key) =>
            <Card key={key} onClick={this.props.playerShow}>
              <img role="presentation" src={player.head_shot}/>
              <CardMedia className ="cardmedia2" overlay={<CardTitle title ={`${player.first_name} ${player.last_name}`}/>}/>
                <FlatButton onClick={this.props.addPlayer(player.id)} className="FlatButton" label="Add"/>

            </Card>)}
        </Slider>
      );
    }
}
export default playerCards;
