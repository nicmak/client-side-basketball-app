import React, { Component } from 'react';
import '../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './navbar.jsx'
import InventoryBox from './inventorybox.jsx'
import DivisionCards from './DivisionCard.jsx'
import TeamCards from './teamcard.jsx'
import PlayerCards from './playercards.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();

class App extends Component {
  //I added the constructor for clarity.

  constructor(props) {
    super(props);
    this.state = {
      teamCards: false,
      teams: [],
      teamPlayers: []
    };
  }
  //This function fetches all the teams when called and appends them in the
  //state.teams
  getTeams = () => {
    fetch(`http://www.localhost:8080/teams`)
      .then((response) => {
        return response.json()
      })
      .then((teams_json) => {
        //parse the received teams and push into teams array in stat.
        //There might be a more efficient to do this.
        console.log(`this are all the teams`, teams_json)
        const teams = this.state.teams
        teams.push(teams_json)
        this.setState({teams})
      })
  }
  //This function fetches the players from a given team.
  //Takes a the team id as an argument.
  getPlayersFromTeam = (team_id) => {
    fetch(`http://www.localhost:8080/teams/${team_id}/players`)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        console.log(`this are the players from ${team_id}`, json)
      })
  }

  componentDidMount() {
    //This imports the teams and puts them in the state.teams.
    this.getTeams()

    //This should be called when you click on one of the teams
    //so not on componentDidMount. I only put it here to test.
    //Also, the team_id should also not be hard coded as I do here.
    this.getPlayersFromTeam(1)
  }

  onClick = () => {
    console.log("App felt something")
    this.setState({teamCards: !this.state.teamCards})
  }
  playerShow =() => {
    console.log("Player button clicked");
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
    console.log(this.state.teamCards);
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <section className="App">
          <Navbar
            style={{backgroundColor:"red"}}
          />
          <DivisionCards teamAppear={this.onClick}/>
          {
            this.state.teamCards
              ? <TeamCards playerShow={this.playerShow}/>
              : null
          }
          <PlayerCards/>
        </section>
      </MuiThemeProvider>
    );

  }
}
export default App;
