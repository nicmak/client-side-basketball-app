import React, { Component } from 'react';
import Navbar from './navbar.jsx'
import DivisionCards from './DivisionCard.jsx'
import TeamCards from './TeamCards.jsx'
import PlayerCards from './playercards.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../styles/App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const playerData = [
  {
    headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201942.png",
    name:"DeMar DeRozan",
    team:"Lakers"
  },
  {
    headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200768.png",
    name:"Kyle Lowry",
    team:"Lakers"
  },
  {
    headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202685.png",
    name:"Jonas Valanciunas",
    team:"Raptors"
  },
  {
    headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203512.png",
    name:"Lucas Nogueira",
    team:"Raptors"
  },
  {
    headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203512.png",
    name:"Lucas Nogueira",
    team:"Knicks"
  },
  {
    headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203512.png",
    name:"Lucas Nogueira",
    team:"Knicks"
  },
  {
    headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203512.png",
    name:"Lucas Nogueira",
    team:"Golden State"
  }
]

const teams = [
  {
    locationImg:"https://images.trvl-media.com/hotels/15000000/14770000/14762000/14761971/14761971_1_z.jpg",
    logo:"http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/tor.png",
    title:"Toronto",
    Conference:"Eastern"
  },
  {
    locationImg:"https://images.trvl-media.com/hotels/15000000/14770000/14762000/14761971/14761971_1_z.jpg",
    logo:"http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/tor.png",
    title:"Toronto",
    Conference:"Eastern"
  },
  {
    locationImg:"https://images.trvl-media.com/hotels/15000000/14770000/14762000/14761971/14761971_1_z.jpg",
    logo:"http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/tor.png",
    title:"Toronto",
    Conference:"Eastern"
  },
  {
    locationImg:"http://www.quinceanera.com/wp-content/uploads/2015/03/griffith-observatory-at-night-los-feliz-los-angeles.jpg",
    logo:"http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/lal.png",
    title:"Los Angeles",
    Conference:"Western"
  },
  {
    locationImg:"http://static.panoramio.com/photos/large/14958187.jpg",
    logo:"http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/chi.png",
    title:"Chicago",
    Conference:"Eastern"
  },
  {
    locationImg:"http://static.panoramio.com/photos/large/47344885.jpg",
    logo:"http://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fnba%2F500%2Fcle.png",
    title:"Cleveland",
    Conference:"Eastern"
  },
  {
    locationImg:"http://traveldigg.com/wp-content/uploads/2016/05/Times-Square-New-York-City-At-Night.jpg",
    logo:"http://4.bp.blogspot.com/-rukBOVnZI4w/UT4iMqZnjqI/AAAAAAAAfmg/ZOVIrHf1NRA/s1600/New+York+Knicks+Club+Logo+2013+04.png",
    title:"New York",
    Conference:"Eastern"
  },
  {
    locationImg:"https://w-dog.net/wallpapers/0/53/337092311092055/night-town-bridge-from-san-francisco-to-oakland-san-francisco-united-states-california.jpg",
    logo:"https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/838px-Golden_State_Warriors_logo.svg.png",
    title:"Golden State",
    Conference:"Western"
  }
]

class App extends Component {
  //I added the constructor for clarity.
  constructor(props) {
    super(props);
    this.state = {
      teamCards: false,
      Conference:"",
      teams: teams,
      teamName:"",
      teamPlayers: playerData
    };
  }
  // This function fetches all the teams when called and appends them in the
  // state.teams
  // getTeams = () => {
  //   fetch(`http://www.localhost:8080/teams`)
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((teams_json) => {
  //       //parse the received teams and push into teams array in stat.
  //       //There might be a more efficient to do this.
  //       console.log(`this are all the teams`, teams_json)
  //       const teams = this.state.teams
  //       teams.push(teams_json)
  //       this.setState({teams})
  //     })
  // }
  //This function fetches the players from a given team.
  //Takes a the team id as an argument.
  // getPlayersFromTeam = (team_id) => {
  //   fetch(`http://www.localhost:8080/teams/${team_id}/players`)
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((json) => {
  //       console.log(`this are the players from ${team_id}`, json)
  //     })
  // }

  // componentDidMount() {
  //   //This imports the teams and puts them in the state.teams.
  //   this.getTeams()
  //
  //   //This should be called when you click on one of the teams
  //   //so not on componentDidMount. I only put it here to test.
  //   //Also, the team_id should also not be hard coded as I do here.
  //   // this.getPlayersFromTeam(1)
  // }
//--------------------------------------------------------------------
  onWestern = () => {
    console.log("App felt something")
    this.setState(
      {
        teamCards: !this.state.teamCards,
        Conference: "Western"
      })
  }
  onEastern = () => {
    console.log("App felt something")
    this.setState(
      {
        teamCards: !this.state.teamCards,
        Conference: "Eastern"
      })
  }
  playerShow = () => {
    console.log("playerShow got clicked")
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
    console.log(this.state.teamCards);
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <section className="App">
          <Navbar/>
          <DivisionCards onWestern={this.onWestern} onEastern={this.onEastern}/>
          {
            this.state.teamCards ? <TeamCards teams={this.state.teams} playerShow={this.playerShow} conferenceValue={this.state.Conference}/>
            : null
          }
          <PlayerCards playerData={this.state.teamPlayers}/>
        </section>
      </MuiThemeProvider>
    );
  }
}
export default App;
