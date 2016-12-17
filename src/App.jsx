import React, { Component } from 'react';
import '../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './navbar.jsx'
import InventoryBox from './inventorybox.jsx'
import DivisionCards from './DivisionCard.jsx'
import TeamCards from './teamcard.jsx'


class App extends Component {




  componentDidMount() {
   fetch('http://www.localhost:8080/')
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      console.log(body)
    })
  }

  onClick = () => {}


  render() {
    return (
      <MuiThemeProvider>
        <section className="App">
          <Navbar/>
          <DivisionCards onClick={this.onClick}/>
          <TeamCards/>
        </section>
      </MuiThemeProvider>
    );
  }
}

export default App;
