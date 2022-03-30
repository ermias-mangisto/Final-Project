import { useEffect, useState, useContext } from "react";
import "./profile.css";
import CreatedPosts from "./created-posts";
import JoinedPosts from "./joined-posts";
import ProfileDetails from "./profile-details";
import CheckAlert from "../../parts/alerts/checkAlert";
import { useParams } from "react-router-dom";
import { GetUserById } from "../../../services/userService"
import { ModeContext } from "../../../context/modeContext/ModeContext";
import { AlertProvider } from "../../../context/alertContext/AlertContext";
const Profile = () => {
  const { id } = useParams()
  const { mode } = useContext(ModeContext);
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    const loadCurrentUser = async () => {
      const newUser = await GetUserById(id);
      setCurrentUser(newUser);
    }
    loadCurrentUser();
  }, [])
  return (
    <div className="profile" style={{ background: mode.backgroundScreen }}>
      <CheckAlert />
      <ProfileDetails currentUser={currentUser} />
      <CreatedPosts currentUser={currentUser} />
      <JoinedPosts currentUser={currentUser} />
    </div>
  );
};

export default Profile;
