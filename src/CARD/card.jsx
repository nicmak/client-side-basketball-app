import React, {Component} from 'react';
import {Card, CardMedia,CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import OneDialog from './Dialog.jsx';
import Snackbar from 'material-ui/Snackbar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import '../../styles/card.css';

const MenuItems = (customTeams = [], cb, player_id) => {
  return customTeams.map((customTeam, index) => {
    return (
      <MenuItem
        key={index}
        primaryText = {customTeam.name}
        onClick={() => {cb(customTeam.id, player_id)}}
      />
    )
  })
                // MenuItems(this.props.customTeams, this.props.addPlayerCustomTeams,player.id)

}

export default class OneCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false,
      open2:false,
      slideIndex: 0,
      MenuOpen:false
    }
  }
  handler = () => {
    this.setState({
      open: !this.state.open
    })
  }
  handlerSnack = () => {
    console.log("HandlerSnacker")
    this.setState({
      open2: !this.state.open2
    })
  }
  handleTab = (value) => {
   this.setState({
     slideIndex: value,
   });
  };

  handlerForPopover = () => {
    this.setState({
      MenuOpen: !this.state.MenuOpen
    })
  }
  handleRequestCloseForPopover = () => {
    this.setState({
      MenuOpen: false,
    });
  };

  render() {
    const player = this.props.player

    return (
      <div>
        <Card>
          <img role="presentation" src={player.head_shot}/>
          <CardMedia className ="cardmedia2"
            overlay={
              <CardTitle
                title ={`${player.first_name} ${player.last_name}`}
              />}
          />
          <div className="buttons">

          <FlatButton
            onClick={(event) => {this.handlerForPopover()}}
            label="ADD"
            className="FlatButton"
          />
          <FlatButton
            onClick={(event) => {this.handler(); this.props.getPlayerBoxscores(player.id);}}
            label="Statistics"
          />
          <Popover
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            open={this.state.MenuOpen}
            onRequestClose={this.handleRequestCloseForPopover}
          >
           <Menu>
            <MenuItem
              onClick={() =>{this.props.getPlayerInfo(player.id); this.handlerSnack()}}
              primaryText="Add to Inventory"
            />
            {
              MenuItems(this.props.customTeams, this.props.addPlayerCustomTeams,player.id)
            }
           </Menu>
          </Popover>



          </div>

          <OneDialog
            teams={this.props.teams}
            handler={this.handler}
            opener={this.state.open}
            player={this.props.player}
            playerInfo={this.props.playerInfo}
            playerStats={this.props.playerStats}
            getPlayerInfo={this.props.getPlayerInfo}
            handlerSnack={this.handlerSnack}
          />
        </Card>
        <Snackbar className="SnackBar"
          open={this.state.open2}
          autoHideDuration={500}
          message={`${player.first_name} ${player.last_name} was added`}
        />
      </div>
    )
  }
}
