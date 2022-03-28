import React from "react";
import "./profile.css";
import CreatedPosts from "./created-posts";
import JoinedPosts from "./joined-posts";
import ProfileDetails from "./profile-details";
import CheckAlert from "../../parts/alerts/checkAlert";
const Profile = () => {
  return (
    <div className="profile">
      <CheckAlert /> 
      <ProfileDetails />
      <CreatedPosts />
      <JoinedPosts />
    </div>
  );
};

export default Profile;
