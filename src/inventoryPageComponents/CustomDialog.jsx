import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import CustomSwipeableview from './CustomSwipeableview.jsx'
import '../../styles/CustomSwipeableview.css';






export default class CustomDialog extends Component {
	
constructor(props) {
	super(props);
	  this.state = {
	  	teams:[]
	  }
}

getTeams = () => {
    fetch(`http://www.localhost:3000/teams`)
      .then((response) => {
        return response.json()
      })
      .then((teams) => {
        console.log(`this are all the teams`, teams)
        this.setState({teams})
      })
  }

checkTeams = () => {
    const teams = this.state.teams
    let name = ""
    teams.map((team) => {
      if (team.id === this.props.player.team_id) {
        name = team.name
      }
    })
    return name
  }




componentDidMount() {
	this.getTeams()
}

	render () {
	    const player = this.props.player
	    const actions = [
	      <FlatButton
	        className="cancel-button"
	        label="Cancel"
	        onClick = {this.props.handlerForStats}
	      />
	      ]

		return (

	    <Dialog
	      className="dialog-view"
	      title={`${this.props.player.first_name} ${this.props.player.last_name} - ${this.checkTeams()}`}
	      autoScrollBodyContent={true}
	      actions={actions}
	      open={this.props.handlerValue}
	      modal={false}
	      contentStyle={{width: '100%', maxWidth:'none'}}
	    >
	    <CustomSwipeableview
	      className="CustomSwipeableview"
        player={player}
        playerStats={this.props.playerStats}
	    />
	    </Dialog>


		)
	}
}