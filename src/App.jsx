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

// const playerData = [
//   {
//     headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201942.png",
//     name:"DeMar DeRozan",
//     team:"Raptors"
//   },
//   {
//     headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200768.png",
//     name:"Kyle Lowry",
//     team:"Lakers"
//   },
//   {
//     headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202685.png",
//     name:"Jonas Valanciunas",
//     team:"Chicago Bulls"
//   },
//   {
//     headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203512.png",
//     name:"Lucas Nogueira",
//     team:"Cavaliers"
//   },
//   {
//     headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203512.png",
//     name:"Lucas Nogueira",
//     team:"Knicks"
//   },
//   {
//     headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203512.png",
//     name:"Lucas Nogueira",
//     team:"Golden State"
//   },
//   {
//     headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203512.png",
//     name:"Lucas Nogueira",
//     team:"Golden State"
//   }
// ]

// const teams = [
//   {
//     locationImg:"https://images.trvl-media.com/hotels/15000000/14770000/14762000/14761971/14761971_1_z.jpg",
//     logo:"http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/tor.png",
//     title:"Raptors",
//     location:"Toronto",
//     Conference:"Eastern"
//   },
//   {
//     locationImg:"http://www.quinceanera.com/wp-content/uploads/2015/03/griffith-observatory-at-night-los-feliz-los-angeles.jpg",
//     logo:"http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/lal.png",
//     title:"Lakers",
//     location:"Los Angeles",
//     Conference:"Western"
//   },
//   {
//     locationImg:"http://static.panoramio.com/photos/large/14958187.jpg",
//     logo:"http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/chi.png",
//     title:"Chicago Bulls",
//     location:"Chicago",
//     Conference:"Eastern"
//   },
//   {
//     locationImg:"http://static.panoramio.com/photos/large/47344885.jpg",
//     logo:"http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fcle.png",
//     title:"Cavaliers",
//     location:"Cleveland",
//     Conference:"Eastern"
//   },
//   {
//     locationImg:"http://traveldigg.com/wp-content/uploads/2016/05/Times-Square-New-York-City-At-Night.jpg",
//     logo:"http://4.bp.blogspot.com/-rukBOVnZI4w/UT4iMqZnjqI/AAAAAAAAfmg/ZOVIrHf1NRA/s1600/New+York+Knicks+Club+Logo+2013+04.png",
//     title:"Knicks",
//     location:"New York",
//     Conference:"Eastern"
//   },
//   {
//     locationImg:"https://w-dog.net/wallpapers/0/53/337092311092055/night-town-bridge-from-san-francisco-to-oakland-san-francisco-united-states-california.jpg",
//     logo:"https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/838px-Golden_State_Warriors_logo.svg.png",
//     title:"Golden State",
//     location:"California",
//     Conference:"Western"
//   }
// ]

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

  componentDidMount() {
    //This imports the teams and puts them in the state.teams.
    this.getTeams()

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
          <DivisionCards onWestern={this.onWestern} onEastern={this.onEastern}/>
          {
            this.state.teamCardsAppear ? <TeamCards getPlayersFromTeam={this.getPlayersFromTeam} teams={this.state.teams} playerShow={this.playerShow} conferenceValue={this.state.Conference}/>
            : null
          }
          {
            this.state.playerCardsAppear ? <PlayerCards addPlayer={this.playerAdd} playerData={this.state.teamPlayers}/>
            : null
          }
        </section>
      </MuiThemeProvider>
    );
  }
}
export default App;
