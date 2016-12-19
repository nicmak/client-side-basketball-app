import React, { Component } from 'react';
import '../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './navbar.jsx'
import InventoryBox from './inventorybox.jsx'
import DivisionCards from './DivisionCard.jsx'
import TeamCards from './teamcard.jsx'
import playerCards from './playercards.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamCards: false
    };
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
          <playerCards/>
        </section>
      </MuiThemeProvider>
    );
  }
}

export default App;
