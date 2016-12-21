import React, {Component} from 'react';
import {Card, CardMedia,CardTitle, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Slider from 'react-image-slider';
import '../styles/card.css';
import '../styles/image-slider.css';

export default class TeamCards extends Component {

  checkDivision = (teamObject) => {
    console.log('12', teamObject.division);
    return teamObject.division === this.props.conferenceValue
  }
  render () {
    const cards = this.props.teams.filter(this.checkDivision).map((team) => {
      return (
        // once we get data flowing in, replace use this.props.getPlayersFromTeam(team.id)
        <Card key={team.id} onClick={() => { this.props.getPlayersFromTeam(team.id) }} >
          <img className="logo" src={team.logo}/>
          <img role="presentation" src={team.background}/>
          <CardMedia className ="cardmedia" overlay={<CardTitle title={team.location}/>}/>
          <CardActions>
            {/* <FlatButton label="Add"/> */}
            <FlatButton href={team.website} label="Website"/>
          </CardActions>
        </Card>
      );
    });
    // if cards is an empty array don't display anything.
    return <Slider key="one">{cards}</Slider>
  }
}
