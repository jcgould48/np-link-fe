import React, { Component } from 'react';
import { connect } from "react-redux";
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { successToast, failureToast } from "../Toastify/Toast";
import { signup } from "../../redux/actions/authUserAction";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = async (e) => {
    e.preventDefault();
    try{
        await this.props.signup(this.props.values)
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
      values: { firstName, lastName, email, profession, zip, expertise }
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
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Profession" secondary={profession} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Zip Code" secondary={zip} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Expertise" secondary={expertise} />
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


const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
  };
};

export default connect(mapStateToProps, { signup })(Confirm);
