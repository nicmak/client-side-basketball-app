import React, { Component } from 'react';
import logo from './logo.svg';
import '../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './navbar.jsx'
import CardExampleWithAvatar from './card.jsx'

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


  render() {
    return (
      <MuiThemeProvider>
      <section className="App">
        <Navbar/>
          <CardExampleWithAvatar/>
      </section>
    </MuiThemeProvider>
    );
  }
}

export default App;
