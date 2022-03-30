import "./editpopup.css";
import react, { useContext, useState } from "react";
import { UserContext } from "../../../context/userContext/userContext";
import { UpdateUser } from "../../../services/userService";
import { ModeContext } from "../../../context/modeContext/ModeContext";
import * as React from 'react';
import TextField from '@mui/material/TextField';

const EditPopUP = (props) => {
  const {mode}=useContext(ModeContext);
  const { user, setUser } = useContext(UserContext);
  const [editUser, setEditUser] = useState({});

  const onFieldChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  const CreateProfile = (e) => {
    e.preventDefault();
    UpdateUser(user._id, editUser).then((res) => {});
    props.handleClose();
  };

  return (
    <div className="popup-box">
      <div className="box" style={{color:mode.colorTitle,border:mode.border,background:mode.backgroundScreen}}>
        <span className="close-icon" onClick={props.handleClose} >
          x
        </span>
        <article className="edit">
          <h1>Edit profile</h1>
          <form>
  <TextField sx={{margin:2}} id="outlined-basic" label="firstName"name="firstName" variant="outlined" onChange={onFieldChange} placeholder="Enter your firstName" type="string"  defaultValue={user.firstName}/>
  <TextField sx={{margin:2}} id="outlined-basic" label="lastName" name="lastName" variant="outlined" onChange={onFieldChange} placeholder="Enter your lastName" type="string"  defaultValue={user.lastName}/> 
  <TextField sx={{margin:2}} id="outlined-basic" label="email" name="email" variant="outlined" onChange={onFieldChange} placeholder="Enter your email" type="string"  defaultValue={user.email}/>
  <TextField sx={{margin:2}} id="outlined-basic" label="phoneNumber" name="phoneNumber" variant="outlined" onChange={onFieldChange} placeholder="Enter your phoneNumber" type="number"   defaultValue={user.phoneNumber}/>
  <TextField sx={{margin:2}} id="outlined-basic" label="image" name="image" variant="outlined" onChange={onFieldChange} placeholder="Enter your image" type="string"   defaultValue={user.image}/>

              <button onClick={CreateProfile}>SAVE</button>

         
            {/* <label>
            <label>
              phone:
              <input
                defaultValue={user.phoneNumber}
                onChange={onFieldChange}
                name="phoneNumber"
                type="number"
              />
            </label>
            <label>
              image:
              <input
                defaultValue={user.image}
                onChange={onFieldChange}
                name="image"
                type="string"
              />
            </label>
            <label>
              <textarea
                defaultValue={user.summary}
                className="summary"
                onChange={onFieldChange}
                name="summary"
                type="text"
              />
            </label>
            <button onClick={CreateProfile} style={{color:mode.colorTitle,border:mode.border,background:mode.backgroundScreen}}>SAVE</button>
            </label> */}
          </form>
        </article>
      </div>
    </div>
  )
 
  }
export default EditPopUP ;
