import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import '../styles/Inventorybox.css';

import {FlatButton, RaisedButton} from 'material-ui';

export default class DrawerOpenRightExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    const playerData = [
      {
        headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201942.png",
        name:"DeMar DeRozan",
        team:"Raptors" }
      // },
      // {
      //   headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/200768.png",
      //   name:"Kyle Lowry",
      //   team:"Raptors"
      // },
      // {
      //   headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/202685.png",
      //   name:"Jonas Valanciunas",
      //   team:"Raptors"
      // },
      // {
      //   headShot:"http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203512.png",
      //   name:"Lucas Nogueira",
      //   team:"Raptors"
      // },
    ]

    const style = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    return (
       <div>
        <RaisedButton
          onClick={this.handleToggle}
          label="Inventory"
        />
        <Drawer className="Background"  width={400} openSecondary={true} open={this.state.open} >
          <AppBar title="User's Inventory">
              <FlatButton onClick={this.handleToggle} label="Close"/>
          </AppBar>
          <List>
            {playerData.map((player, index) => (
            <ListItem
              disabled={true}
              key={index}
              leftAvatar=
              {
              <Paper style={style} zDepth={3} size={40}>
                <img className="playerImg" src="http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203512.png"/>
              </Paper>
              }
            >
               {player.name}
             </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}
