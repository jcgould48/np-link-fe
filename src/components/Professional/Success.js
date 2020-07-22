import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";



export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // let path = `/login`; 
    // history.push(path);
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>Please login to select a nonprofit organization.</p>
            <br />
            <Button 
            color="primary"
            variant="contained"
            >
            <NavLink
          to="/login"
          className="navbar-home"
          // activeStyle={{ background: "dark blue" ,fontWeight: "bold" }}
          activeClassName="selected"
          exact
          >
          Go to Login
          </NavLink></Button>
            {/* <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Go To Login</Button> */}
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;