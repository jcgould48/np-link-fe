import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import AuthNavLinks from "./AuthNavLinks";
import UnAuthNavLinks from "./UnAuthNavLinks";

import { logout } from "../../redux/actions/authUserAction";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { isAuthenticated, user } = this.props.authUser;

    return (
      <header>
        <NavLink
          to="/"
          className="navbar-home"
          activeStyle={{ fontWeight: "bold" }}
          activeClassName="selected"
          exact
        >
          Home
        </NavLink>
        <nav>
          {user && isAuthenticated ? (
            <AuthNavLinks
              {...user}
              {...isAuthenticated}
              logout={this.props.logout}
            />
          ) : (
            <UnAuthNavLinks />
          )}
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
