import react, { useContext,useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext/userContext";
import { FaUserAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import EditPopUP from "./editpopup";
import "./profile-details.css";
import { ModeContext } from "../../../context/modeContext/ModeContext";
const ProfileDetails = ({ currentUser}) => { 
  const {user}=useContext(UserContext);
  const {mode}=useContext(ModeContext);

  const [myProfile,setMyProfile] = useState(false)
  useEffect(() => {
if(currentUser._id === user._id) {
  setMyProfile(true)
}
  },[currentUser])
 
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    
    <div className="ProfileDetailsComp">
    <div className="ProfileDetails" style={{border:mode.border}}>
      <div className="detail">
        <div className="icon">
          {currentUser.image ? <img className="imageProfile" src={currentUser.image}/> : <FaUserAlt className="userIcon" />}
        
        </div>
        
        <h1>
          {currentUser.firstName} {currentUser.lastName}
        </h1>

        <h4>
          connect with :
          <a href={`https://wa.me/${currentUser.phoneNumber}`} target="_blank">
            <FaWhatsapp className="WhatsappIcon" target="_blank" />
          </a>
          <a href="mailto:email@echoecho.com?subject=SweetWords">
            <FaRegEnvelope className="emailIcon" />
          </a>
        </h4>
      </div>
      <div>
        {open && <EditPopUP handleClose={toggleOpen} />}
      { myProfile && <button className="editButton" onClick={toggleOpen}>
          <FaPencilAlt />
        </button>}
        <p className="summary">{currentUser.summary} </p>
      </div>
    </div>
    </div>

  );
};

export default ProfileDetails;
