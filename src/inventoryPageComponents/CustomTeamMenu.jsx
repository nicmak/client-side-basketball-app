import React, {Component} from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Popover from 'material-ui/Popover';
import FlatButton from 'material-ui/FlatButton';
import '../../styles/InventoryPage.css';


const MenuItems = (customTeams = [] , cb, cb2) => {
  return customTeams.map((customTeam, index) => {
    return (
      <div>
        <MenuItem
          primaryText={customTeam.name}
          menuItems={[
            <MenuItem className="MenuItem"
              primaryText = {"Show" + customTeam.name}
              onClick = {() => { cb(customTeam.name)}}
            />,
            <MenuItem className="MenuItem"
              primaryText = {"Delete " + customTeam.name}
              onClick = {() => { cb2(customTeam.id)}}
            />       
          ]}
        /> 
      </div>
    )
  })
}


export default class CustomTeamMenu extends Component {

handlerForPopover = () => {
    this.setState({
      MenuOpen: !this.state.MenuOpen
    })
}
handleRequestCloseForPopover = () => {
  this.setState({
    MenuOpen: false,
  });
};


  render () {
		return (

      <div>
       
        
          <Menu className="Menu">
            {
              MenuItems(this.props.customTeams, this.props.selectCustomTeam, this.props.deleteCustomTeam)
            }
            
          </Menu>
      </div>
			)
	}
}