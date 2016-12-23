import React, {Component} from 'react';
import {Card, CardMedia,CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import OneDialog from './Dialog.jsx';
import Snackbar from 'material-ui/Snackbar';
import '../../styles/card.css';

export default class OneCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false,
      open2:false,
      slideIndex: 0
    }
  }
  handler = () => {
    this.setState({
      open: !this.state.open
    })
  }
  handlerSnack = () => {
    this.setState({
      open2: !this.state.open2
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
      <div>
        <Card key={key}>
          <img role="presentation" src={player.head_shot}/>
          <CardMedia className ="cardmedia2"
            overlay={
              <CardTitle
                title ={`${player.first_name} ${player.last_name}`}
              />}
          />
          <FlatButton
            onClick={() =>{this.handlerSnack();this.props.getPlayerInfo(player.id)}}
            className="FlatButton"
            label="Add"
          />
          <FlatButton
            onClick={(event) => {this.handler(); this.props.getPlayerBoxscores(player.id);}}
            label="Statistics"
          />

          <OneDialog
            teams={this.props.teams}
            handler={this.handler}
            opener={this.state.open}
            player={this.props.player}
            playerInfo={this.props.playerInfo}
            playerStats={this.props.playerStats}
          />
        </Card>
        <Snackbar className="SnackBar"
          open={this.state.open2}
          message={`${player.first_name} ${player.last_name} was added to Inventory`}
        />
      </div>
    )
  }
}
