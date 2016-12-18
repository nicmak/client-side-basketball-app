import React, { Component } from 'react';
import '../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './navbar.jsx'
import InventoryBox from './inventorybox.jsx'
import DivisionCards from './DivisionCard.jsx'
import TeamCards from './teamcard.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamCards: false
    };
  }

  onClick = () => {
    console.log("App felt something")
    // this.setState({teamCards:true})
  }

  componentDidMount() {
   fetch('http://www.localhost:8080/')
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      console.log(body)
    })
  }
  render() {
    return (
      <MuiThemeProvider>
        <section className="App">
          <Navbar/>
          <DivisionCards dope={this.onClick}/>
          {/* Click is not firing from handDivClick */}
          <TeamCards teamCardsTog={this.state.teamCards}/>
        </section>
      </MuiThemeProvider>
    );
  }
}

export default App;
