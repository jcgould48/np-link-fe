import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ButtonGroup from "../shared/ButtonGroup"
import Button from '@material-ui/core/Button';
import "./Home.css"

export default class Home extends Component {
  render() {
    return (
    <>
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
          <NavLink
            to="/sign-up"
            className="home-nav-btn"
            activeStyle={{ fontWeight: "bold" }}
            activeClassName="selected"
            exact
          >
           Professionals
          </NavLink>

          <NavLink
            to="/auth-org"
            className="home-nav-btn"
            activeStyle={{ fontWeight: "bold" }}
            activeClassName="selected"
            exact
          >
           Nonprofits
          </NavLink>
          </div>
    </>
    )
  }
}
