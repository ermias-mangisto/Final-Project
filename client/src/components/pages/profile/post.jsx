import { useContext,useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext/userContext";
import PostPopUp from "../home/postPopUp";
import EditPostPopUP from "./editPostPopUp";
import { FaPencilAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { ModeContext } from "../../../context/modeContext/ModeContext";
const Post = ({ postInfo, icon ,currentUser }) => {
  const {user}=useContext(UserContext);
  const {mode}=useContext(ModeContext);

  const [myProfile,setMyProfile] = useState(false)
  useEffect(() => {
    if(currentUser._id === user._id) {
      setMyProfile(true)
    }
  },[currentUser])
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const [postEditOpen, setPostEditOpen] = useState(false);
  const togglePostEditOpen = () => {
    setPostEditOpen(!postEditOpen);
  };
  return (
    <div className="post" style={{color:mode.colorTitle,border:mode.border}} >
      {isOpen && (
        <PostPopUp
          postInfo={postInfo}
          name={currentUser.firstName}
          postId={postInfo._id}
          handleClose={togglePopup}
        />
      )}
      <div onClick={togglePopup}>{icon}</div>
      <div>
        <p>{postInfo.postName}</p>
        <p>{postInfo.projectType}</p>
      </div>
      {postEditOpen && (
        <EditPostPopUP handleClose={togglePostEditOpen} postInfo={postInfo} />
      )}
     {myProfile && <div onClick={togglePostEditOpen}> <FaPencilAlt style={{color:mode.colorTitle}} className="editButton"/></div>}
    </div>
  );
};
export default Post;
