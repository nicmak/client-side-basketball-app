import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import CustomSwipeableview from './CustomSwipeableview.jsx'
import '../../styles/CustomSwipeableview.css';






export default class CustomDialog extends Component {
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
	      title="Statistics"
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