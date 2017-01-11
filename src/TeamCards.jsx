import React, {Component} from 'react';
import {Card, CardMedia,CardTitle, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Slider from 'react-image-slider';
import '../styles/card.css';
import '../styles/image-slider.css';

export default class TeamCards extends Component {

  checkDivision = (teamObject) => {
    return teamObject.division === this.props.conferenceValue
  }
  render () {
    const cards = this.props.teams.filter(this.checkDivision).map((team) => {
      return (
        <Card key={team.id} onClick={() => { this.props.getPlayersFromTeam(team.id) }} >
          <div className="image-background">
            <img className="logo" src={team.logo}/>
            <img role="presentation" src={team.background}/>
          </div>
          <CardMedia className ="cardmedia" overlay={<CardTitle title={team.location}/>}/>
          <div className="website">
            <FlatButton href={team.website} target="_blank" label="Website"/>
          </div>  
          <div className="website">
            <FlatButton href={team.twitter} target="_blank" label="Twitter"/>
          </div>       
        </Card>
      );
    });
    // if cards is an empty array don't display anything.
    return <Slider key="one">{cards}</Slider>
  }
}
