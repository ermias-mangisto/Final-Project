import { FaUserAlt } from "react-icons/fa";

const Post = ({ postInfo, icon , }) => {
  return (
    <div className="post">
      <div>{icon}</div>
      <div>
        <p>{postInfo.postName}</p>
        <p>{postInfo.projectType}</p>

      </div>
    </div>
  );
};
export default Post;
