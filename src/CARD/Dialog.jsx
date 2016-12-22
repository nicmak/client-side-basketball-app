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
      slideIndex: 0
    }
  }
  handler = () => {
    this.setState({
      open: !this.state.open
    })
  }
  handleTab = (value) => {
   this.setState({
     slideIndex: value,
   });
  };

  render() {
    const player = this.props.player
    const key = this.props.key

    return (
              <Dialog key={key}
                className="views"
                title="Statistics"
                autoScrollBodyContent={true}
                modal={false}
                open={this.props.opener}
                onRequestClose={this.handler}
              >
                <OneSwipeableView player={this.props.player}/>
                <FlatButton
                  label="Close"
                  primary={true}
                  onClick={this.handler}
                />
                <FlatButton label="Add"/>
              </Dialog>
    )
  }
}
