import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
Toolbar, 
ListItem,
List, 
IconButton,ListItemText, 
Typography, 
Box, 
Avatar, 
Divider, 
ListItemIcon
} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import "./Home.css"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});


const Home=()=>{
  const classes = useStyles();
    
    return (
      <>
      <Box>
    <div className="home">
      <br/>
      <br/>
    <div className="home-text-top">
      <Typography variant="h3" align= "center">
      Welcome to Charity---Link
      </Typography>
    </div>
      <br/>
      <br/>
      <br/>
    <div className="home-text-body">
    <Typography variant="h5" align= "center" style={{color:"tan"}}>
    Where professionals can volunteer
      </Typography>
      <br/>
      <Typography variant="h4" align= "center" style={{color:"tomato", textShadow: "2px 2px #331111"}}>
       - AND -
      </Typography>
      <br/>
    <Typography variant="h5" align= "center" style={{color:"tan"}}>
    Nonprofits can find qualified help
      </Typography>
      </div>
    <br/>
      <br/>
    <div className="homeButtons">
      <Button className={classes.root} component={Link} to={"/professional-form"}>Professional Form</Button>
      <Button className={classes.root} component={Link} to={"/organization-form"}>Nonprofit Form</Button>
      </div>
    </div>
    </Box>
    </>
    )
  
}


export default Home
