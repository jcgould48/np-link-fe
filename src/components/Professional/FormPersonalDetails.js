import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your Profession"
              label="Profession"
              onChange={handleChange('profession')}
              defaultValue={values.profession}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Zip Code"
              label="Zip Code"
              onChange={handleChange('zip')}
              defaultValue={values.zip}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Areas of Expertise"
              label="Expertise"
              onChange={handleChange('expertise')}
              defaultValue={values.expertise}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;