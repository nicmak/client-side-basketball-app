import React, { Component } from 'react';
import Navbar from './navbar.jsx'
import DivisionCards from './DivisionCard.jsx'
import TeamCards from './TeamCards.jsx'
import PlayerCards from './playercards.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../styles/App.css';
import '../styles/background.css'
import injectTapEventPlugin from 'react-tap-event-plugin';
import jwtDecode from'jwt-decode';

injectTapEventPlugin();
//Hello
//--------------------------------------------------------------------

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamCardsAppear: false,
      playerCardsAppear: false,
      Conference:true,
      teamPlayers: null,
      selectedPlayers: [],
      userID: null

      // selectedTeam:null
    };
  }
//--------------------------------------------------------------------
  getTeams = () => {
    fetch(`http://www.localhost:3000/teams`)
      .then((response) => {
        return response.json()
      })
      .then((teams) => {
        console.log(`this are all the teams`, teams)
        this.setState({teams})
      })
  }

  getPlayersFromTeam = (team_id) => {
    fetch(`http://www.localhost:3000/teams/${team_id}/players`)
      .then((response) => {
        return response.json()
      })
      .then((player_json) => {
        console.log(`this are the players from ${team_id}`,player_json)
        this.setState(
          {
            teamPlayers:player_json,
            playerCardsAppear: !this.state.playerCardsAppear
          }
        )
      })
  }
//--------------------------------------------------------------------
  selectPlayer = (player) => {
    let selectedPlayers = this.state.selectedPlayers
    let found = selectedPlayers.some((existPlayer) => {
      return existPlayer.id === player.id;
    })
    if (!found) {
      selectedPlayers.push(player)
      console.log("You just added a player")
      console.log(selectedPlayers);
      this.setState({selectedPlayers})
      console.log(this.state)
    }
  }

  getPlayerInfo = (player_id) => {
    fetch(`http://www.localhost:3000/players/${player_id}`)
      .then((response) => {
        return response.json()
      })
      .then((playerInfo) => {
      let player = playerInfo[0]
          console.log(`this is the player bio object:`, player)
          this.selectPlayer(player)
      })
  }

  deletePlayer = (selectPlayer) => {
    let newState = this.state.selectedPlayers;
    let found = newState.forEach((existPlayer) => {
      if (existPlayer.id === selectPlayer.id) {
        let position = newState.indexOf(selectPlayer)
        newState.splice(position, 1)
        this.setState({selectedPlayers:newState})
      }
    })
  }

  teamName = (event) => {
    let teamName = event.target.value
    this.setState({teamName:teamName})
  }

  selectPlayer_id = (selectedPlayers) => {
    let player_id = []
    selectedPlayers.forEach((object) => {
      player_id.push(object.id)
    })
    return player_id;
  }



  saveTeam = (teamName) => {
    if (this.state.selectedPlayers.length > 0 && teamName) {
    console.log("condition passed")
    let customTeam = {
      players: this.selectPlayer_id(this.state.selectedPlayers),
      name: teamName
    }
    
    let customTeamJSON = JSON.stringify(customTeam);
    console.log("customTeamJSON",customTeamJSON)
    fetch(`http://www.localhost:3000/custom_teams/new `, {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${sessionStorage.getItem('token')} `
      } ,
      cache: 'default',
      body: customTeamJSON,
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
    });
   
   }
   else {
    console.log("Please Select Players and Provide a Team Name")
   }
  }
//----------------------------------------------------------------------
//This function is passed down as a prop to navbar.js, then to Registration.jsx
//checks to see if email and password are not blank, userInfo as JSON String, will
// be passed to server via post request
registerUser = (email, password) => {
   if (email != "" && password != "") {
   let userInfo = {
      email : email.trim(),
      password : password.trim()
    }

    let userInfoJSON = JSON.stringify(userInfo);
    console.log("userInfo object sending to server", userInfo)
    fetch(`http://www.localhost:3000/users/signup`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type" : "application/json",
        // "Authorization" : `Bearer ${this.state.token} `
      },
      cache: 'default',
      body: userInfoJSON,
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("responsejson",responseJson)
      sessionStorage.setItem('token',responseJson.token);
      console.log("Stored in SessionStorage");
    })
      //The response coming back from the server will be a User ID
      // console.log("response",response.json)
      // let userID = response
      // cookie.save('UserID', userID, { path: '/' });
    }
     else {
      console.log("Missing information")
     }
  }
//--------------------------------------------------------------------
loginUser = (email,password) => {
  if (email != "" && password != "") {
   let userInfo = {
      email : email.trim(),
      password : password.trim()
    }
    let userInfoJSON = JSON.stringify(userInfo);
    console.log("userInfo object sending to server", userInfo)
    fetch(`http://www.localhost:3000/users/signin`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type" : "application/json",
        // "Authorization" : `Bearer ${sessionStorage.getItem('token')} `
      },      
      cache: 'default',
      body: userInfoJSON,
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("responsejson",responseJson)
      sessionStorage.setItem('token',responseJson.token);
      console.log("Stored");
    })
  }
   
 else {
  console.log("Missing information")
 }
}

logoutUser = () => {
  sessionStorage.clear();
  console.log("JWT session cleared")
  this.setState({currentUser:""})
}
//--------------------------------------------------------------------
  getPlayerBoxscores = (player_id) => {
    fetch(`http://www.localhost:3000/players/${player_id}/boxscores`)
      .then((response) => {
        return response.json()
      })
      .then((playerStats) => {
        console.log(`this is the player boxscores:`, playerStats)
        this.setState({playerStats})
      })
    }
//--------------------------------------------------------------------
  onWestern = () => {
    console.log("Western felt something")
    this.setState(
      {
        teamCardsAppear: !this.state.teamCardsAppear,
        Conference: false
      })
  }

  onEastern = () => {
    console.log("Eastern felt something")
    this.setState(
      {
        teamCardsAppear: !this.state.teamCardsAppear,
        Conference: true
      })
  }
  
//--------------------------------------------------------------------

  componentDidMount() {
    this.getTeams()
    let token = sessionStorage.getItem('token');
    let decoded = jwtDecode(token)
      console.log('decoded',decoded)
      console.log(decoded.email)
      this.setState({currentUser:decoded.email})
  }
//--------------------------------------------------------------------


  render() {
    
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <section className="App">
          <Navbar 
            selectedPlayers={this.state.selectedPlayers} 
            deletePlayer={this.deletePlayer}
            registerUser={this.registerUser}
            loginUser={this.loginUser}
            logoutUser={this.logoutUser}
            teamName={this.teamName}
            teamNameSnack={this.state.teamName}
            saveTeam={this.saveTeam}
            currentUser={this.state.currentUser}

          />

          <DivisionCards
            onEastern={this.onEastern}
            onWestern={this.onWestern}
          />
          {
            this.state.teamCardsAppear ?
              <TeamCards
                conferenceValue={this.state.Conference}
                getPlayersFromTeam={this.getPlayersFromTeam}
                teams={this.state.teams}
              />
            : null 
          }
          {
            this.state.playerCardsAppear ?
              <PlayerCards
                getPlayerBoxscores={this.getPlayerBoxscores}
                getPlayerInfo={this.getPlayerInfo}
                playersData={this.state.teamPlayers}
                playerStats={this.state.playerStats}
                teams={this.state.teams}
              />
            : null
          }
          <footer
            className="BottomBar"
          >
          <h1 className="quote">I've failed over and over and over again in my life and that is why I succeed - Michael Jordan</h1>
          </footer>
        </section>
      </MuiThemeProvider>
    );
  }
}
export default App;
