import React, {Component} from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import '../../styles/InventoryPage.css';


const MenuItems = (customTeams = [] , cb, cb2) => {
  return customTeams.map((customTeam, index) => {
    return (
      <div>
        <MenuItem className="MenuItem"
          primaryText = {customTeam.name}
          onClick = {() => { cb(customTeam.name)}}
        />
        <MenuItem className="MenuItem"
          primaryText = {"Delete " + customTeam.name}
          onClick = {() => { cb2(customTeam.id)}}
        />
      </div>
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
              MenuItems(this.props.customTeams, this.props.selectCustomTeam, this.props.deleteCustomTeam)
            }
            
          </Menu>
        </Paper>
      </div>
			)
	}
}