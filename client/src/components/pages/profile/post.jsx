import { useContext,useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext/userContext";
import PostPopUp from "../home/postPopUp";
import EditPostPopUP from "./editPostPopUp";
import { FaPencilAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
const Post = ({ postInfo, icon ,currentUser }) => {
  const {user}=useContext(UserContext);
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
    <div className="post">
       {isOpen && <PostPopUp
        content={
 <article className='post-PopUpCard' >
 <h1 className='post-nameTag'> posted by:{currentUser.firstName}on {postInfo.createdAt}</h1>
<div className='post-PopUpText'>
<h1>
 {`${postInfo.postName}-${postInfo.projectType}`}
      </h1>   
        <p>    { postInfo.postText}</p>
 <p>  Participants required: { postInfo.numberOfParticipants}</p>
 <p>  Technologies Required: { postInfo.technologiesRequired}</p>
       </div>
      </article>}
        name={currentUser.firstName}
        postId={postInfo._id}
        handleClose={togglePopup}
      />} 
      <div onClick={togglePopup}>{icon}</div>
      <div>
        <p>{postInfo.postName}</p>
        <p>{postInfo.projectType}</p>
      </div>
      {postEditOpen && (
        <EditPostPopUP handleClose={togglePostEditOpen} postInfo={postInfo} />
      )}
     {myProfile && <div onClick={togglePostEditOpen}> <FaPencilAlt className="editButton"/></div>}
    </div>
  );
};
export default Post;
