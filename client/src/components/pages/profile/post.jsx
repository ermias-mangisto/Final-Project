import { useContext,useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext/userContext";
import PostPopUp from "../home/postPopUp";
import EditPostPopUP from "./editPostPopUp";
import { FaPencilAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import {GetUserById} from "../../../services/userService"
const Post = ({ postInfo, icon ,currentUser }) => {
  const {user}=useContext(UserContext);
  const [myProfile,setMyProfile] = useState(false);

  useEffect(() => {
    if(currentUser._id === user._id) {
      setMyProfile(true)
    }
  },[currentUser])
  const [userName,setUserName]=useState({});
  useEffect(()=>{
    const getUserName =async(id)=>{
   const user = await GetUserById(id);
   setUserName({name:`${user.firstName} ${user.lastName}`,short:`${user.firstName[0].toUpperCase()+user.lastName[0].toUpperCase()}`});
     }  
     getUserName(postInfo.userId);
 },[])
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
      {isOpen && (
        <PostPopUp
          postInfo={postInfo}
          name={userName}
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
     {myProfile && <div onClick={togglePostEditOpen}> <FaPencilAlt className="editButton"/></div>}
    </div>
  );
};
export default Post;
