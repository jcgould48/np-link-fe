import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { successToast, failureToast } from "../../Toastify/Toast";
// import { signup } from "../../redux/actions/authUserAction";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = async (e) => {
    e.preventDefault();
    try{
        // await signup(this.props.values)
        this.props.nextStep();
    }
    catch (e) {
        failureToast(e);
      }
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { orgName,poc, email, helpNeeded,pitch, description, zip, chipInput}
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Organization Name" secondary={orgName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Point Of Contact" secondary={poc} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Pitch" secondary={pitch} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Description" secondary={description} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Help Needed" secondary={helpNeeded} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Hash Tags" secondary={chipInput} />
              </ListItem>
            </List>
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
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;