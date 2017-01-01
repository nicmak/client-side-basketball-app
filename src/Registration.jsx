import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';


export default class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      errorText : "",
      email: "",
      password: ""
    }
  }

  handler = () => {
    this.setState({
      open: !this.state.open
    })
  }

  emailChange = (event) => {
    let email = event.target.value
    if (email.includes("@")) {
      this.setState({
        errorText:"",
        email : email
      })
    }
    else {
      this.setState({
        errorText:"Invalid Email"
      })
    }
  }

  passwordChange = (e) => {
    let password = e.target.value
    this.setState({password:password})
  }

  render() {

    const actions = [
      <FlatButton
        label="Close"
        onClick = {this.handler}
      />,
      <FlatButton
        label="Register"
        onClick={ () =>{this.props.registerUser(this.state.email, this.state.password)}}
      />,
    ]
    return (
      <div>
        <FlatButton
          label="Register"
          onClick = {this.handler}
        />
        <Dialog
          className="Register"
          title="Registration Page"
          autoScrollBodyContent={true}
          modal={false}
          actions={actions}
          open={this.state.open}
        >
          <TextField
            hintText="Email Address"
            floatingLabelText="Email Address"
            type="email"
            onChange={this.emailChange}
            errorText={this.state.errorText}
          />
          <br/>
          <TextField
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            onChange={this.passwordChange}
          />


        </Dialog>  
      </div>
    )

  }

}