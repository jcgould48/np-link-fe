import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
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
            <h1>Thank You For Your Submission!</h1>
            <p>You will get an email shortly with further instructions.</p>
          <Button 
          color="primary"
          variant="contained"
          component={Link} 
          to={"/"}>
            Return Home
          </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;