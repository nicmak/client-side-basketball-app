import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import CustomTeamPlayers from './inventoryPageComponents/CustomTeamPlayers';
import CustomTeamMenu from './inventoryPageComponents/CustomTeamMenu';
import {Tabs,Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import '../styles/InventoryPage.css';
import {Link} from 'react-router';

export default class InventoryPage extends Component {
	constructor(props) {
		super(props)
    this.state = {
    	team:"",
    	selectedPlayers: [],
    	customTeamName:"",
    	selectedPlayersAppear: false,
      playerArray: [],
      playerStatsArray: [],
      playerStats: [{player_id:0}],
      customTeams: []
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
	     let customTeams = responseJson
       this.setState({customTeams})
       console.log(this.state.customTeams)
	     this.setState({selectedPlayersAppear: !this.state.selectedPlayersAppear})
		 })
	}
  selectCustomTeam = (selectedName) => {
    this.setState({
      playerArray:[],
      playerStatsArray:[]
    })

    let customTeamsArray = this.state.customTeams
    
    customTeamsArray.forEach((customTeam) => {
      if (customTeam.name === selectedName) {
        this.getCustomTeamPlayers(customTeam.id);
        this.setState({customTeamID:customTeam.id})
        
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
       console.log('customTeamPlayersIDs',customTeamPlayersIDs)
       // console.log(this.state.customTeamPlayersIDs)

	     customTeamPlayersIDs.forEach((player) => {
	     	let id = player.player_id;
	     	this.getPlayerInfo(id)
	     })
		 })
	}

  deleteCustomTeamPlayer = (customTeam_id,player_id) => {
    console.log("All",this.state)
    let newState = this.state.playerArray
     newState.forEach((existPlayer) => {
      if (existPlayer.id === player_id ) {
        let position = newState.indexOf(existPlayer)
        newState.splice(position,1)
        this.setState({playerArray:newState})
      }
     })

    this.setState({currentSelectedTeam:customTeam_id})
    if (this.state.playerArray.length === 0) {
      let newState = this.state.customTeams
      newState.forEach((customTeam) => {
        if (customTeam.id === customTeam_id) {
          let position = newState.indexOf(customTeam)
          newState.splice(position, 1)
          this.setState({customTeams:newState})
        }
      })
    }
    fetch(`http://www.localhost:3000/custom_teams/${customTeam_id}/${player_id}/remove`, {
      method:'PUT',
      headers: {
        "Authorization" : `Bearer ${sessionStorage.getItem('token')} `
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      let customTeam_id = (parseInt(responseJson.id))
      // this.getCustomTeamPlayers(customTeam_id)
    }) 
  }

  deleteCustomTeam = (customTeam_id) => {
    this.setState({currentSelectedTeam:customTeam_id})
      let newState = this.state.customTeams
      newState.forEach((customTeam) => {
        if (customTeam.id === customTeam_id) {
          let position = newState.indexOf(customTeam)
          newState.splice(position, 1)
          this.setState({customTeams:newState})
          this.setState({playerArray:[]})

        }
      })
    fetch(`http://www.localhost:3000/custom_teams/${customTeam_id}/remove`, {
      method:'PUT',
      headers: {
        "Authorization" : `Bearer ${sessionStorage.getItem('token')} `
      }
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
        // this.getPlayerBoxscores(player_id)

	    })
  }

  getPlayerBoxscores = (player_id) => {
    console.log("hello")
    let playerStatsArray = this.state.playerStatsArray
    fetch(`http://www.localhost:3000/players/${player_id}/boxscores`)
      .then((response) => {
        return response.json()
      })
      .then((playerStats) => {
        this.setState({playerStats})
        console.log(this.state.playerStats)
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
    	<section className="container">
        <div className="Navbar">
	        <Link to='/'>Home</Link>
        </div>
        <div className="CustomTeamMenu">
          <CustomTeamMenu 
            selectCustomTeam={this.selectCustomTeam}
            customTeams={this.state.customTeams}
            deleteCustomTeam={this.deleteCustomTeam}
          />
        </div>
        <div className="Body">
            <CustomTeamPlayers
              playerArray={this.state.playerArray}
              playerStatsArray={this.state.playerStatsArray}
              selectedPlayers={this.state.selectedPlayers}
              selectedPlayersAppear={this.state.selectedPlayersAppear}
              getPlayerBoxscores={this.getPlayerBoxscores}
              playerStats={this.state.playerStats}
              deleteCustomTeamPlayer={this.deleteCustomTeamPlayer}
              customTeamID={this.state.customTeamID}
            />
        </div>
        <div className="Footer"></div>
      </section>
    </MuiThemeProvider>

    )
  }
}