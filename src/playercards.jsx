import React, {Component} from 'react';
import {Card, CardMedia,CardTitle, CardActions, FlatButton} from 'material-ui/Card';
import Slider from 'react-image-slider';
import '../styles/image-slider.css';
import '../styles/card.css';

class playerCards extends Component {

  constructor(props) {
    super(props);
    this.state
  }
  checkTeams = (teamObject) => {
    return teamObject.team === this.props.teamName
  }
    render() {
      return (
        <Slider>
          {this.props.playerData.filter(this.checkTeams).map((player,key) =>
            <Card key={key} onClick={this.props.playerShow}>
              <img role="presentation" src={player.headShot}/>
              <CardMedia className ="cardmedia" overlay={<CardTitle title ={player.name}/>}>
              </CardMedia>
            </Card>)}
        </Slider>
      );
    }
}
export default playerCards;
