import react,{useState,useContext} from 'react';
import {UserContext} from "../../../context/userContext/userContext"
import {loginUser} from "../../../services/userService"
import jwt_decode from "jwt-decode";
import "./login.css";
function Login(props){
const {  user,setUser ,setIsLoggedIn,isLoggedIn}=useContext(UserContext)
    const onFieldChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(user)
        .then((res) => {if(res.success){
            localStorage.setItem("token",res.token);
            const token = localStorage.getItem("token");
            const decoded = jwt_decode(token);
            localStorage.setItem("userId",decoded.user._id);
            setUser(decoded.user);
            setIsLoggedIn(true)
            props.handleClose()}
            alert(res.message)})
      };

      return (
        <div className="popup-box-login">
        <div className="box-login">
          <span className="close-icon-login"onClick={props.handleClose}>x</span>
          <article className="login">
          <h1>login</h1>
          <form onSubmit={handleSubmit}>
            <label>
              email:
              <input onChange={onFieldChange} name="email" type="email" />
            </label>
            <label>
              Password:
              <input onChange={onFieldChange} name="password" type="password" />
            </label>
            <button >login</button>
          </form>
          </article>
        </div>
      </div>

       
      )
}
export default Login;