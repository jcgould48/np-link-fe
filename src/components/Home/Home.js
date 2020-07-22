import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ButtonGroup from "../shared/ButtonGroup"
import Button from '@material-ui/core/Button';
import "./Home.css"

export default class Home extends Component {
  render() {
    // const { classes } = props;
    return (
    <div className="home">
    <div>
      <h3>Welcome, ....

        If you are a professional looking to volunteer please follow the Professional button.
        If you are a Nonprofit organization looking for volunteers please follow the Nonprofit button.

      </h3>
    </div>
    <div className="homeButtons">
     {/* <ButtonGroup
            buttonStyle="form-button"
            title="Professionals"
            variant="contained"
            color="primary"
            component={Link}
            
          />
      <ButtonGroup
            buttonStyle="form-button"
            title="Nonprofits"
            variant="contained"
            color="primary"
          /> */}
          <Button variant="fab"
          color="primary"
          aria-label="add"
          // className={classes.button}
          >
          <NavLink
            to="/professional-form"
            className="home-nav-btn"
            activeStyle={{ fontWeight: "bold" }}
            activeClassName="selected"
            exact
          >
           Professionals
          </NavLink>
          </Button>
          <NavLink
            to="/organization-form"
            className="home-nav-btn"
            activeStyle={{ fontWeight: "bold" }}
            activeClassName="selected"
            exact
          >
           Nonprofits
          </NavLink>
          </div>
    </div>
    )
  }
}
