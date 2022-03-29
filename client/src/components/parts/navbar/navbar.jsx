import react, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/userContext/userContext";
import Register from "../../parts/register/register";
import Login from "../../parts/login/login";
import React from "react";
import "./navbar.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FaUserAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import {useNavigate} from "react-router-dom"
import { ModeContext } from "../../../context/modeContext/ModeContext";
import Modes from "../mode/modes";
const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const { mode } = useContext(ModeContext);
  const {
    user,
    setUser,
    displayAlerts,
    setDisplayAlerts,
    isLoggedIn,
    setIsLoggedIn,
    counter
  } = useContext(UserContext);

  function HandleLogout(){
    localStorage.removeItem("token")
    setUser({})
    setIsLoggedIn(false)
    navigate("/")
    }
  const toggleLogin = () => {
    setLogin(!login);
  };
  const toggleRegister = () => {
    setRegister(!register);
  };
  const classes = useStyles();

  return (
    <div className="navbar" >
      {login && <Login handleClose={toggleLogin} />}
      {register && <Register handleClose={toggleRegister} />}
      {!isLoggedIn && (
        <AppBar position="static" color="inherit" style={{background:mode.headerFoteer,color:mode.color}}>
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              TEAMWARE
            </Typography>
            <Button color="inherit" onClick={toggleLogin}>
              Login
            </Button>
            <Button color="inherit" onClick={toggleRegister}>
              Register
            </Button>
          </Toolbar>
        </AppBar>
      )}
      {isLoggedIn && (

        <AppBar position="static" color="inherit" style={{background:mode.headerFoteer,color:mode.color}}>
          <Toolbar>
            <Modes/>
            <Typography variant="h5" className={classes.title}>
              <Link to="/">TEAMWARE</Link>
            </Typography>
            <Button color="inherit">
              {" "}
              <Link to={`/profile/${user._id}`}>
                <FaUserAlt className="Icon" />
              </Link>
            </Button>

            <Button color="inherit">
              {" "}
              <Link to="/main">
                <FaHome className="Icon" />
              </Link>
            </Button>
            <Button
              color="inherit"
              onClick={() => setDisplayAlerts(!displayAlerts)}
            >
              <FaBell className="Icon" />
              
              {counter?<span className="counter_newNotification">{counter}</span>:""}
              
            </Button>
            <Button color="inherit" onClick={HandleLogout}>

              <Link to="/">
                <FiLogOut className="Icon" />
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
};

export default NavBar;
