import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

import {FlatButton, RaisedButton} from 'material-ui';

export default class DrawerOpenRightExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    // console.log(this.state.open)
    return (
      <div>
        <RaisedButton
          onClick={this.handleToggle}
          label="Inventory"
        />
        <Drawer width={400} openSecondary={true} open={this.state.open} >
          <AppBar title="User's Inventory">
              <FlatButton onClick={this.handleToggle} label="Close"/>
          </AppBar>
        </Drawer>
      </div>
    );
  }
}
