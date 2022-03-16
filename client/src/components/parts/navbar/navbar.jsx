
import react,{useState,useContext} from 'react';
import { Link } from "react-router-dom";
import {UserContext} from "../../../context/userContext/userContext"
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

const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn}=useContext(UserContext)
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const {  user,setUser}=useContext(UserContext)
  function HandleLogout(){
      setUser({})
      localStorage.removeItem("token")
      setIsLoggedIn(false)}
  const toggleLogin = () => {
    setLogin(!login);
  }
  const toggleRegister = () => {
    setRegister(!register);
  }
  const classes = useStyles();

  return (
    <div className='navbar'>
     {login && <Login handleClose={toggleLogin} />}
      {register && <Register handleClose={toggleRegister} />}
   {!isLoggedIn &&    <AppBar position="static" color="#f8f5f1">
        <Toolbar >
          <Typography variant="h5" className={classes.title}>
            TEAMWARE
          </Typography>
          <Button color="inherit" onClick={toggleLogin}>Login</Button>
          <Button color="inherit" onClick={toggleRegister}>Register</Button>
        </Toolbar>
      </AppBar>}
   {isLoggedIn &&    <AppBar position="static" color="#f8f5f1">
        <Toolbar >
          <Typography variant="h5" className={classes.title}>
          <Link to="/">TEAMWARE</Link> 
          </Typography>
          <Button color="inherit" > <Link to="/profile">profile</Link></Button>
          <Button color="inherit" > <Link to="/main">Main</Link></Button>
          <Button color="inherit" onClick={HandleLogout}><Link to="/">log-out</Link></Button>
        </Toolbar>
      </AppBar>}
    </div>

  );
}

export default NavBar;
