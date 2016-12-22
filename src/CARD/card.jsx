import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {Card, CardMedia,CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Tabs, Tab} from 'material-ui/Tabs';
import '../../styles/card.css';

export default class OneCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false
      // slideIndex: 0
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
    return (
        <Card key={this.props.key}>
          <img role="presentation" src={this.props.player.head_shot}/>
          <CardMedia className ="cardmedia2" overlay={<CardTitle title ={`${this.props.player.first_name} ${this.props.player.last_name}`}/>}/>
            <FlatButton className="FlatButton" label="Add"/>
            <FlatButton onClick={this.handler}   label="Statistics"/>
        </Card>
    )
  }
}
