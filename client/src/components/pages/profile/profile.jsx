import React from "react";
import "./profile.css";
import CreatedPosts from "./created-posts";
import JoinedPosts from "./joined-posts";
import ProfileDetails from "./profile-details";

const Profile = () => {
  return (
    <div className="profile">
      <ProfileDetails />
      <CreatedPosts />
      <JoinedPosts />
    </div>
  );
};

export default Profile;
