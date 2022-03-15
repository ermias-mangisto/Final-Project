
import {useState,useContext} from 'react';
import {UserContext} from "../../../context/userContext/userContext"
import { registerNewUser ,loginUser} from "../../../services/userService";
import jwt_decode from "jwt-decode";
import "./register.css"
function Register(props) {
  const [newUser, setNewUser] = useState({});
  const {  user,setUser}=useContext(UserContext)

  const onFieldChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
    registerNewUser(newUser).then((res) => {
    
    if(res.success){
    loginUser(newUser)
    .then((res) => {if(res.success){
        localStorage.setItem("token",res.token);
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        setUser(decoded.user);
        props.handleClose()}
        })}
        alert(res.message);
    });
  };
  return (
    <div className="popup-box">
    <div className="box">
      <span className="close-icon" onClick={props.handleClose}>x</span>
      <article className="register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          lastName:
          <input onChange={onFieldChange} name="lastName" type="text" />
        </label>
        <label>
          firstName:
          <input onChange={onFieldChange} name="firstName" type="text" />
        </label>
        <label>
          email:
          <input onChange={onFieldChange} name="email" type="email" />
        </label>
        <label>
          phone:
          <input onChange={onFieldChange} name="phoneNumber" type="number"/>
        </label>
        <label>
          Password:
          <input onChange={onFieldChange} name="password" type="password" />
        </label>
        <button>Register</button>
      </form>
      </article>
      </div>
  </div>

  );
}

export default Register;