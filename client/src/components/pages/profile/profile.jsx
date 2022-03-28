import {useEffect,useState} from "react";
import "./profile.css";
import CreatedPosts from "./created-posts";
import JoinedPosts from "./joined-posts";
import ProfileDetails from "./profile-details";
import CheckAlert from "../../parts/alerts/checkAlert";
import {useParams} from "react-router-dom";
import {GetUserById} from "../../../services/userService"
const Profile = () => {
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
    <div className="profile">
      <CheckAlert /> 
      <ProfileDetails currentUser={currentUser}/>
      <CreatedPosts currentUser={currentUser}/>
      <JoinedPosts currentUser={currentUser}/>
    </div>
  );
};

export default Profile;
