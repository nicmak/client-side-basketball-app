import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import CustomSwipeableview from './CustomSwipeableview.jsx'





export default class CustomDialog extends Component {
	render () {
	    const player = this.props.player
	    const actions = [
	      <FlatButton
	        label="Cancel"
	        onClick = {this.props.handlerForStats}
	      />
	      ]
		
		return (
	  
	    <Dialog
	      title="Statistics"
	      autoScrollBodyContent={true}
	      actions={actions}
	      open={this.props.handlerValue}
	      modal={false}
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