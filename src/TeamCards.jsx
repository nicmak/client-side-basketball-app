import React, {Component} from 'react';
import {Card, CardMedia,CardTitle, CardActions, FlatButton} from 'material-ui/Card';
import Slider from 'react-image-slider';
import '../styles/card.css';
import '../styles/image-slider.css';

export default class TeamCards extends Component {
  constructor(props) {
    super(props);
    this.state
  }
  checkDivision = (teamObject) => {
    console.log('12', teamObject.Conference);
    return teamObject.Conference === this.props.conferenceValue
  }
  render () {
    const cards = this.props.teams.filter(this.checkDivision).map((team, key) => {
      return (
        // once we get data flowing in, replace use this.props.getPlayersFromTeam(team.id)
        <Card key={key} onClick={() => { this.props.selectTeam(team.title) }} >
          <img className="logo" src={team.logo}/>
          <img role="presentation" src={team.locationImg}/>
          <CardMedia className ="cardmedia" overlay={<CardTitle title={team.location}/>}/>
        </Card>
      );
    });
    // if cards is an empty array don't display anything.
    return <Slider key="one">{cards}</Slider>
  }
}
