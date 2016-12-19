import React, { Component } from 'react';
import {AppBar, FlatButton} from 'material-ui';
import InventoryBox from './inventorybox.jsx'
class Navbar extends Component {

  render () {

  //   const buttonStyle = {
  //   backgroundColor: 'transparent',
  //   color: 'white'
  // };
  //
  //   const rightButtons = (
  //     <div>
  //       <FlatButton label="About" style={buttonStyle}/>
  //       <FlatButton label="Home" style={buttonStyle}  />
  //     </div>
  //   );

    return (

      <AppBar title="Basketball Cards">
    
        <InventoryBox/>
      </AppBar>


   )}
}
export default Navbar;
