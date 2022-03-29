import {useEffect,useState} from "react";
import "./profile.css";
import Profile from "./profile";
import ProfileDetails from "./profile-details";
import CheckAlert from "../../parts/alerts/checkAlert";
import Admin from "../../pages/admin/admin"
import {useParams} from "react-router-dom";
import {GetUserById} from "../../../services/userService"
import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext/userContext";
const ProfileRoute = () => {
 const {user}=useContext(UserContext);
  const {id} =useParams()
  const [currentUser,setCurrentUser]=useState("");
  useEffect(() =>{
 const loadCurrentUser= async()=>{
    const newUser=await GetUserById(id);
     setCurrentUser(newUser);
  }
     loadCurrentUser();
  },[])
  return (
<>
{ user.isAdmin==true && currentUser.isAdmin ==true? <Admin/> : 
 user.isAdmin==true && currentUser.isAdmin ==false? <Profile/> : 
user.isAdmin==false && currentUser.isAdmin==false?<Profile/>:
user.isAdmin==false && currentUser.isAdmin==true?<Admin/>
:null}
</>
  );
};

export default ProfileRoute;
