import React, {Component} from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import '../../styles/InventoryPage.css';


const MenuItems = (customTeams = [] , cb) => {
  return customTeams.map((customTeam, index) => {
    return (
      <MenuItem className="MenuItem"
        key={index}
        primaryText = {customTeam.name}
        onClick = {() => { cb(customTeam.name)}}
      />
    )
  })
}
export default class CustomTeamMenu extends Component {



  render () {
		return (

      <div>
        <Paper>
          <Menu className="Menu">
            {
              MenuItems(this.props.customTeams, this.props.selectCustomTeam)
            }
            
          </Menu>
        </Paper>
      </div>
			)
	}
}