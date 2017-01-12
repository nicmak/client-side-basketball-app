import React, {Component} from 'react';
import '../../styles/InventoryPage.css';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import CustomPlayStats from './CustomPlayStats.jsx'
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';
import CustomDialog from './CustomDialog.jsx'
import {GridList, GridTile} from 'material-ui/GridList';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

export default class CustomTeamPlayers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handlerValue : false,
      MenuOpen: false
     
    }
  }
  
  handlerForStats = () => {
    this.setState({handlerValue : !this.state.handlerValue})
  }
  

 


  render () {
  	console.log(this.props.customTeamID)
		return (
			<div>
      <GridList 
         className="GridList"
         cellHeight={380}
         style={styles.gridList}
         cols={1}
         style={{
          height: "790px",
          overflowY: 'auto',
        }}
      >
			{
				this.props.playerArray ?
	      this.props.playerArray.map((player, index) => (
          <GridTile 
          >
            <div className="playerContainer"
               key={index}
            >   
                <div className="face">
                  <img 
                    src={player.head_shot}
                  />
                </div>
                <div className="playerText">
                  {`${player.first_name} ${player.last_name}`}
                  <br/>  
                  {`${player.position}`}
                </div>
                <div className="options">
                  <FlatButton
                    label="Statistics"
                    onClick={() => {this.props.getPlayerBoxscores(player.id);this.handlerForStats()}}
                  />
                  <FlatButton
                    label="Remove"
                    onClick={() => {this.props.deleteCustomTeamPlayer(this.props.customTeamID,player.id)}}
                  />
                </div>
                <CustomDialog
                  handlerForStats={this.handlerForStats}
                  handlerValue={this.state.handlerValue}
                  player={player}
                  playerStats={this.props.playerStats}
                />
             </div>
	          
            </GridTile>
            ))
	      :null
			}
      </GridList>
      
      </div>
			)
	}
}