
import {useState} from "react"
import Register from "../../parts/register/register";
import Login from "../../parts/login/login";
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
    const [login,setLogin]=useState(false);
const [register,setRegister]=useState(false);
const toggleLogin = () => {
    setLogin(!login);
  }
  const toggleRegister = () => {
    setRegister(!register);
  }
    const classes = useStyles();

    return (
     {login &&<Login   handleClose={toggleLogin}/>}
{register &&<Register handleClose={toggleRegister}/>}
      <div className='navbar'>
        <AppBar position="static" color= "#f8f5f1">
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              TEAMWARE
            </Typography>
            <Button color="inherit" onClick={toggleLogin}>Login</Button>
            <Button color="inherit" onClick={toggleRegister}>Register</Button>
          </Toolbar>
        </AppBar>
      </div>
      
    );
  }

  export default NavBar;

