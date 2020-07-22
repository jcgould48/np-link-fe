import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {AppBar,Toolbar, ListItem,List, IconButton,ListItemText, Typography, Box, Tabs, Tab, Avatar, Divider, ListItemIcon} from '@material-ui/core'
import {ArrowBack, Home, Apps, ContactMail, AssignmentInd} from '@material-ui/icons'
import {makeStyles} from '@material-ui/core/styles'
import AuthNavLinks from "./AuthNavLinks";
import UnAuthNavLinks from "./UnAuthNavLinks";

import { logout } from "../../redux/actions/authUserAction";

import "./Navbar.css";

const useStyles = makeStyles(theme=>({
  menueSliderContainer:{
    width: 250,
    background: "#511",
    height:"30rem",
  },
  logo:{
    display:"block",
    margin:"0.5 rem auto",
    width: theme.spacing(13),
    height:theme.spacing(13)
  }
}))

const menuItems=[
  {
    listIcon:<Home/>,
    listText:"HOME"
  },
  {
    listIcon:<AssignmentInd/>,
    listText:"AssignmentInd"
  },
  {
    listIcon:<Apps/>,
    listText:"Portfolio"
  },
  {
    listIcon:<ContactMail/>,
    listText:"Contacts"
  },
  {
    listIcon:<Home/>,
    listText:"Home"
  },
]

class Navbar extends Component {
  render() {
    // const { isAuthenticated, user } = this.props.authUser;
    const classes = useStyles()
    return (
      <Box className={classes.menueSliderContainer} component="nav">
        <Avatar className={classes.logo} src="/images/misc/user.png" alt="logo" />
        <Divider/>
        <List>
          {menuItems.map((lsItem, key)=>(

            <ListItem button key={key}>
            <ListItemIcon>
              {lsItem.listIcon }
            </ ListItemIcon>
            <ListItemText/> 
          </ListItem>
            ))}
        </List>
      <AppBar position="static" style={{background :"#222"}}>
        <Toolbar>
      <ArrowBack style={{color:"tomato"}}/>
      <Typography variant="h5" style={{color:"tan"}}>
      Charity-Link
      </Typography>
        </Toolbar>
    </AppBar>
    </Box>
      // <header>
      //   <NavLink
      //     to="/"
      //     className="navbar-home"
      //     activeStyle={{ fontWeight: "bold" }}
      //     activeClassName="selected"
      //     exact
      //   >
      //     Home
      //   </NavLink>
      //   <nav>
      //     {user && isAuthenticated ? (
      //       <AuthNavLinks
      //         {...user}
      //         {...isAuthenticated}
      //         logout={this.props.logout}
      //       />
      //     ) : (
      //       <UnAuthNavLinks />
      //     )}
      //   </nav>
      // </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
