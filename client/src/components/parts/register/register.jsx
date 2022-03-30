
import {useState,useContext} from 'react';
import {UserContext} from "../../../context/userContext/userContext"
import { registerNewUser ,loginUser} from "../../../services/userService";
import jwt_decode from "jwt-decode";
import TextField from '@mui/material/TextField';
import "./register.css"
function Register(props) {
  const [newUser, setNewUser] = useState({});
  const [password, setPassword] = useState("");
  const {  user,setUser,setIsLoggedIn,isLoggedIn}=useContext(UserContext)

  const onFieldChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };
  const onPasswordConfirm = (e) => {
   const  value = e.target.value;
   setPassword( value );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
    if(newUser.password===password) {
         registerNewUser(newUser).then((res) => {
    if(res.success){
    loginUser(newUser)
    .then((res) => {if(res.success){
        localStorage.setItem("token",res.token);
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        setUser(decoded.user);
        setIsLoggedIn(true);
        props.handleClose()}
        })}
        alert(res.message);
    });
    }else{
      alert("passwords dont match")
    }
 
  };
  return (
    <div className="register-popup-box">
    <div className="register-box">
      <span className="register-close-icon" onClick={props.handleClose}>close</span>
      <article className="register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <TextField sx={{margin:2}} id="outlined-basic" label="First-name"name="firstName" variant="outlined" onChange={onFieldChange} placeholder="write your first-name" type="text"/>
        <TextField sx={{margin:2}} id="outlined-basic" label="Last-name"name="lastName" variant="outlined" onChange={onFieldChange} placeholder="write your last-name" type="text"/>
        <TextField sx={{margin:2}} id="outlined-basic" label="Email"name="email" variant="outlined" onChange={onFieldChange} placeholder="write your email" type="email"/>
        <TextField sx={{margin:2}} id="outlined-basic" label="Phone-number"name="phoneNumber" variant="outlined" onChange={onFieldChange} placeholder="+972" type="number"/>
      <TextField sx={{margin:2}} id="outlined-basic" label="Password" name="password" variant="outlined" onChange={onFieldChange} placeholder="write your password" type="password"/>
      <TextField sx={{margin:2}} id="outlined-basic" label="Confirm-Password" name="ConfirmPassword" variant="outlined"onChange={onPasswordConfirm} placeholder="confirm password" type="password"/>
        <button>Register</button>
      </form>
      </article>
      </div>
  </div>

  );
}

export default Register;