import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import OneSwipeableView from './SwipeableViews.jsx'
import '../../styles/card.css';
import {grey900} from 'material-ui/styles/colors';


export default class OneDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open:false,
      slideIndex: 0,
      team:""
    }
  }

//--------------------------------------------------------------------

  checkTeams = () => {
    const teams = this.props.teams
    let name = ""
    teams.map((team) => {
      if (team.id === this.props.player.team_id) {
        name = team.name
      }
    })
    return name
  }
//--------------------------------------------------------------------

  render() {
    const player = this.props.player
    const key = this.props.key

    const actions = [
      <FlatButton
        label="Close"
        onClick = {this.props.handler}
        style={{color:'black'}}
      />,
      <FlatButton
        style={{color:'black'}}
        label = "Add"
        onClick ={() => {this.props.handlerSnack;this.props.getPlayerInfo(player.id)}}
      />
    ]

    return (
      <Dialog key={key}
        className="views"
        title={`${this.checkTeams().toUpperCase()} - ${this.props.player.first_name} ${this.props.player.last_name}`}
        autoScrollBodyContent={true}
        modal={false}
        actions={actions}
        open={this.props.opener}
        contentStyle={{width: '100%', maxWidth:'none'}}
      >
        <OneSwipeableView
          player={this.props.player}
          playerStats={this.props.playerStats}
        />
      </Dialog>
    )
  }
}
