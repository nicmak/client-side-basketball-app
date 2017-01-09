import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import CustomTeamPlayers from './inventoryPageComponents/CustomTeamPlayers';
import CustomTeamMenu from './inventoryPageComponents/CustomTeamMenu';
import {Tabs,Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';


import {Link} from 'react-router';
import '../styles/InventoryPage.css';

export default class InventoryPage extends Component {
	constructor(props) {
		super(props)
    this.state = {
    	team:"",
    	selectedPlayers: [],
    	customTeamName:"",
    	selectedPlayersAppear: false,
      playerArray: [],
      playerStatsArray: []
    };
	}

	

	getCustomTeams = () => {
    fetch(`http://www.localhost:3000/custom_teams/`, {
    	method:'GET',
    	headers: {
    		"Authorization" : `Bearer ${sessionStorage.getItem('token')} `
    	}
    })
		 .then((response) => response.json())
		 .then((responseJson) => {
	     // console.log('getCustomTeams', responseJson)
	     let customTeams = responseJson
       this.setState({customTeams})
       // console.log("All states",this.state)
       //  customTeams.forEach((customTeam) => {
       //    console.log(customTeam)
	      //   this.getCustomTeamPlayers(customTeam.id)	          
	      // })
	      this.setState({selectedPlayersAppear: !this.state.selectedPlayersAppear})
		 })
	}

  selectCustomTeam = (selectedName) => {
    this.setState({playerArray:[]})
    this.setState({playerStatsArray:[]})
    let customTeamsArray = this.state.customTeams
    customTeamsArray.forEach((customTeam) => {
      if (customTeam.name === selectedName) {
        this.getCustomTeamPlayers(customTeam.id);
        
      }
    })
  } 


	getCustomTeamPlayers = (customTeam_id) => {
    fetch(`http://www.localhost:3000/custom_teams/${customTeam_id}/players`, {
    	method:'GET',
    	headers: {
    		"Authorization" : `Bearer ${sessionStorage.getItem('token')} `
    	}
    })
		 .then((response) => response.json())
		 .then((responseJson) => {
	     // console.log('getCustomTeamPlayers', responseJson)
	     let customTeamPlayersIDs = responseJson
       this.setState({customTeamPlayersIDs})
       // console.log(this.state.customTeamPlayersIDs)

	     customTeamPlayersIDs.forEach((player) => {
	     	let id = player.player_id;
	     	this.getPlayerInfo(id)

	     })
		 })
	}
	     	
	getPlayerInfo = (player_id) => {
    let playerArray = this.state.playerArray
    fetch(`http://www.localhost:3000/players/${player_id}`)
      .then((response) => {
        return response.json()
      })
      .then((playerInfo) => {
        let player = playerInfo[0]
        playerArray.push(player)
        this.setState({playerArray})
	    })
  }

  getPlayerBoxscores = (player_id) => {
    let playerStatsArray = this.state.playerStatsArray
    fetch(`http://www.localhost:3000/players/${player_id}/boxscores`)
      .then((response) => {
        return response.json()
      })
      .then((playerStats) => {
        console.log("playerStats",playerStats)
        this.setState({playerStats})
        // this.setState({playerStatsArray})
        // console.log("playerStatsArray",this.state.playerStatsArray)
      })
    }
	

  componentDidMount() {
		this.getCustomTeams()	  
	}

  

  

  render() {
    return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>	
    	<section className="background">
	      <Link to='/'>Home</Link>
            <CustomTeamMenu
              selectCustomTeam={this.selectCustomTeam}
              customTeams={this.state.customTeams}
            />
          
            <CustomTeamPlayers
              playerArray={this.state.playerArray}
              playerStatsArray={this.state.playerStatsArray}
              selectedPlayers={this.state.selectedPlayers}
              selectedPlayersAppear={this.state.selectedPlayersAppear}
              getPlayerBoxscores={this.getPlayerBoxscores}
              playerStats={this.state.playerStats}
            />
          
      </section>
    </MuiThemeProvider>

    )
  }
}



