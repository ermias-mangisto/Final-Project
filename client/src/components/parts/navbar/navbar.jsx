
import React from 'react';
import "./navbar.css";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

   const NavBar=()=> {
    
    const classes = useStyles();

    return (
     
      <div className='navbar'>
        <AppBar position="static" color= "#f8f5f1">
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              TEAMWARE
            </Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Register</Button>
          </Toolbar>
        </AppBar>
      </div>
      
    );
  }

  export default NavBar;