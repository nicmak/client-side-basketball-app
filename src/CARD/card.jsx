import React, {Component} from 'react';
import {Card, CardMedia,CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import OneDialog from './Dialog.jsx';
import '../../styles/card.css';

export default class OneCard extends Component {
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
        <Card key={key}>
          <img role="presentation" src={player.head_shot}/>
          <CardMedia className ="cardmedia2" overlay={<CardTitle title ={`${player.first_name} ${player.last_name}`}/>}/>
          <FlatButton  className="FlatButton" label="Add"/>
          <FlatButton   onClick={this.handler}   label="Statistics"/>
          <OneDialog opener={this.state.open} player={this.props.player}/>
        </Card>
    )
  }
}
