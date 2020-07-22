import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {AppBar,Toolbar, ListItem,List, IconButton,ListItemText, Typography, Box, Tabs, Tab, Avatar, Divider, ListItemIcon} from '@material-ui/core'
import {ArrowBack, Home, Apps, ContactMail, AssignmentInd} from '@material-ui/icons'
import {makeStyles} from '@material-ui/core/styles'
import MobileRightMenuSlider from "@material-ui/core/Drawer"
import AuthNavLinks from "./AuthNavLinks";
import UnAuthNavLinks from "./UnAuthNavLinks";

import { logout } from "../../redux/actions/authUserAction";

import "./Navbar.css";

const useStyles = makeStyles(theme=>({
  menuSliderContainer:{
    width: 250,
    background: "#511",
    height:"100%",
  },
  logo:{
    display:"block",
    margin:"0.5 rem auto",
    width: theme.spacing(13),
    height:theme.spacing(13)
  },
  listItem: {
    color: "tan",
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

// class Navbar extends Component 
const Navbar=()=>{
  // render() {
    // const { isAuthenticated, user } = this.props.authUser;
    const [state, setState] = useState({
      right:false
    })

    const toggleSlider=((slider, open)=> ()=>{
      setState({...state, [slider]:open })
    })
    const classes = useStyles()
    const sideList= slider =>(

      <Box 
      className={classes.menuSliderContainer} 
      component="div"
      onClick={toggleSlider(slider, false )}
      >
        <Avatar className={classes.logo} src="/images/misc/user.png" alt="logo" />
        <Divider/>
        <List>
          {menuItems.map((lsItem, key)=>(

            <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon }
            </ ListItemIcon>
            <ListItemText className={classes.listItem}  primary={lsItem.listText}/> 
          </ListItem>
            ))}
        </List>
        </Box>
    )
    return (
      <>
      
        <Box component="nav">
      <AppBar position="static" style={{background :"#222"}}>
        <Toolbar>
          <IconButton onClick={toggleSlider("right", true )}>
      <ArrowBack style={{color:"tomato"}}/>
      </IconButton>
      <Typography variant="h5" style={{color:"tan"}}>
      Charity-Link
      </Typography>
      <MobileRightMenuSlider 
      anchor="right"
      open={state.right}
      onClose={toggleSlider("right", false  )}
      >
        {sideList("right")}
      </MobileRightMenuSlider>
        </Toolbar>
    </AppBar>
    </Box>
    </>
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
    )
  }


// const mapStateToProps = (state) => {
//   return {
//     authUser: state.authUser,
//   };
// };
export default Navbar
// export default connect(mapStateToProps, { logout })(Navbar);
