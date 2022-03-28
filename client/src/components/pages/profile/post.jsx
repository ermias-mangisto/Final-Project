import { useState } from "react";
import PostPopUp from "../home/postPopUp";
import EditPostPopUP from "./editPostPopUp";
import { FaPencilAlt } from "react-icons/fa";



const Post = ({ postInfo, icon, user }) => {
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
      {postEditOpen && (
        <EditPostPopUP postInfo={postInfo} handleClose={togglePostEditOpen} />
      )}

      {isOpen && (
        <PostPopUp
          content={
            <article className="post-PopUpCard">
              <h1 className="post-nameTag">
                posted by:{user.firstName}on {postInfo.createdAt}
              </h1>
              <div className="post-PopUpText">
                <h1>{`${postInfo.postName}-${postInfo.projectType}`}</h1>
                <p>{postInfo.postText}</p>
                <p> Participants required: {postInfo.numberOfParticipants}</p>
                <p> Technologies Required: {postInfo.technologiesRequired}</p>
              </div>
            </article>
          }
          name={user.firstName}
          postId={postInfo._id}
          handleClose={togglePopup}
        />
      )}
       <div className="editButton" onClick={togglePostEditOpen}>
        <FaPencilAlt />
      </div>
      <div>
        <p>{postInfo.postName}</p>
        <p>{postInfo.projectType}</p>
      </div>
     

      <div onClick={togglePopup}>{icon}</div>
    </div>
  );
};
export default Post;
