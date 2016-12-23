import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import OneSwipeableView from './SwipeableViews.jsx'
import '../../styles/card.css';

export default class OneDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false,
      slideIndex: 0,
      team:""
    }
  }

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

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onClick = {this.props.handler}
      />,
      <FlatButton
        label = "Add"
      />
    ]
    const player = this.props.player
    const key = this.props.key

    return (
      <Dialog key={key}
        className="views"
        title={this.checkTeams()}
        autoScrollBodyContent={true}
        modal={false}
        actions={actions}
        open={this.props.opener}
      >
        <OneSwipeableView
          playerInfo={this.props.playerInfo}
          player={this.props.player}
          playerStats={this.props.playerStats}
        />
      </Dialog>
    )
  }
}
