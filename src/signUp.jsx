import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  marginLeft: 20,
};
class signUp extends Component {
  render() {
    return (
      <Paper zDepth={2}>
        <TextField hintText="Email address" style={style} underlineShow={false} />
        <Divider />
        <TextField hintText="Password" style={style} underlineShow={false} />
        <Divider />
      </Paper>
    )
  }
}
export default signUp;
