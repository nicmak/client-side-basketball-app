import React, { Component } from 'react';
import Navbar from './navbar.jsx'
import DivisionCards from './DivisionCard.jsx'
import TeamCards from './TeamCards.jsx'
import PlayerCards from './playercards.jsx'
import signUp from './signUp.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../styles/App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  //I added the constructor for clarity.
  constructor(props) {
    super(props);
    this.state = {
      teamCardsAppear: false,
      playerCardsAppear: false,
      Conference:true,
      teamPlayers: null
      // selectedTeam:null
    };
  //  this
    //this.selectTeam = this.selectTeam.bind(this)
  }
  // This function fetches all the teams when called and appends them in the
  // state.teams
  getTeams = () => {
    fetch(`http://www.localhost:8080/teams`)
      .then((response) => {
        return response.json()
      })
      .then((teams) => {
        //parse the received teams and push into teamsnpm array in stat.
        //There might be a more efficient to do this.
        console.log(`this are all the teams`, teams)
        this.setState({teams})
      })
  }
  // This function fetches the players from a given team.
  // Takes a the team id as an argument.
 getPlayersFromTeam = (team_id) => {
    fetch(`http://www.localhost:8080/teams/${team_id}/players`)
      .then((response) => {
        return response.json()
      })
      .then((player_json) => {
        console.log(`this are the players from ${team_id}`,player_json)
        this.setState(
          {
            teamPlayers:player_json,
            // selectedTeam: team_id,
            playerCardsAppear: !this.state.playerCardsAppear

          }
        )
      })
  }

  // getPlayerInfo = (player_id) => {
  //   fetch(`http://www.localhost:8080/players/${player_id}`)
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((playerInfo) => {
  //       console.log(`this is the player bio object:`, playerInfo)
  //       // this.setState({playerInfo})
  //     })
  //   }

  getPlayerBoxscores = (player_id) => {
    fetch(`http://www.localhost:8080/players/${player_id}/boxscores`)
      .then((response) => {
        return response.json()
      })
      .then((playerStats) => {
        console.log(`this is the player boxscores:`, playerStats)
        this.setState({playerStats})
      })
    }

  componentDidMount() {
    //This imports the teams and puts them in the state.teams.
    this.getTeams()
    // this.getPlayerBoxscores(4);
// this.getPlayersFromTeam(25)
// this.getPlayerInfo(4)
    //This should be called when you click on one of the teams
    //so not on componentDidMount. I only put it here to test.
    //Also, the team_id should also not be hard coded as I do here.
    // this.getPlayersFromTeam(1)

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
  playerAdd = () => {
    console.log("You added a player")
    // this.setState(
    //   {
    //     teamName:this.
    //   })
  }
  // componentDidMount() {
  //  fetch('http://www.localhost:8080/')
  //   .then((response) => {
  //     return response.text();
  //   })
  //   .then((body) => {
  //     console.log(body)
  //   })
  // }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <section className="App">
          <Navbar/>
            <DivisionCards
              onWestern={this.onWestern}
              onEastern={this.onEastern}
            />
          {
            this.state.teamCardsAppear ?
              <TeamCards
                getPlayersFromTeam={this.getPlayersFromTeam}
                teams={this.state.teams}
                playerShow={this.playerShow}
                conferenceValue={this.state.Conference}
              />
            : null
          }
          {
            this.state.playerCardsAppear ?
              <PlayerCards
                addPlayer={this.playerAdd}
                playersData={this.state.teamPlayers}
                playerInfo={this.state.playerInfo}
                teams={this.state.teams}
                getPlayerInfo={this.getPlayerInfo}
                getPlayerBoxscores={this.getPlayerBoxscores}
                playerStats={this.state.playerStats}

              />
            : null
          }
        </section>
      </MuiThemeProvider>
    );
  }
}
export default App;
