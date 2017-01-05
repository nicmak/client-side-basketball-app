import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';
import OneList from './List.jsx'
import '../styles/Inventorybox.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';



import {RaisedButton} from 'material-ui';

export default class InventoryBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      open2: false,
      teamName:"",
      slideIndex: 0

    }
  }
//--------------------------------------------------------------------
  handleToggle = () => this.setState({open: !this.state.open});
  
  handlerSnack = () => {
    console.log("HandlerSnacker")
    this.setState({
      open2: !this.state.open2
    })
  }

  handleTeamName = (event) => {
    this.setState({teamName:event.target.value})
  }  
//--------------------------------------------------------------------
  render() {
    return (
       <div>
         <RaisedButton
           onClick={this.handleToggle}
           label="Inventory"
         />
        <Drawer
          className="Background"
          width={400}
          openSecondary={true}
          open={this.state.open}
        >
          <AppBar title="User's Inventory"/>
          <FlatButton
            onClick={this.handleToggle}
            label="Close"
          />
          <FlatButton
            onClick={() => {this.props.saveTeam(this.state.teamName);this.handlerSnack();}}
            label="Save"
          />   
          <Tabs className="tabs">
            <Tab
              style={{color:"red"}}
              label="BIO" value={0}
            />
            </Tabs>

          <SwipeableViews 
            className="views"
            index={this.state.slideIndex}
            onChangeIndex={this.handleTab}
          >
            
            <OneList
              selectedPlayers={this.props.selectedPlayers}
              deletePlayer={this.props.deletePlayer}
              handleTeamName={this.handleTeamName}
            />   
          </SwipeableViews>
         
        </Drawer>
        <Snackbar className="SnackbarInventory"
          open={this.state.open2}
          message={`${this.state.teamName} was added`}
        />
      </div>
    );
  }
}
