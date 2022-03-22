import react, { useContext, useState } from "react";
import { UserContext } from "../../../context/userContext/userContext";

import { FaUserAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import EditPopUP from "./editpopup";
import "./profile-details.css";

const ProfileDetails = () => {
  const { user, setUser } = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    
    <div className="ProfileDetailsComp">
    <div className="ProfileDetails">
      <div className="detail">
        <div className="icon">
          {user.image ? user.image : <FaUserAlt className="userIcon" />}
        </div>
        
        <h1>
          {user.firstName} {user.lastName}
        </h1>

        <h4>
          connect with :
          <a href={`https://wa.me/${user.phoneNumber}`}>
            <FaWhatsapp className="WhatsappIcon" />
          </a>
          <a href="mailto:email@echoecho.com?subject=SweetWords">
            <FaRegEnvelope className="emailIcon" />
          </a>
        </h4>
      </div>
      <div>
        <button className="editButton" onClick={toggleOpen}>
          <FaPencilAlt />
        </button>
        <p className="summary">{user.summary} </p>
        {open && <EditPopUP handleClose={toggleOpen} />}
      </div>
    </div>
    </div>

  );
};

export default ProfileDetails;
