import react, { useContext } from "react";
import { UserContext } from "../../../context/userContext/userContext";
import { FaUserAlt } from "react-icons/fa";
import "./joined-posts.css";

const Post = ({ user }) => {
  return (
    <div className="post">
      {user.image ? user.image : <FaUserAlt className="userIcon" />}
      {user.firstName}
      {user.lastName}
      {user.JoinedPost}
    </div>
  );
};

const posts = [1, 2, 3, 4, 5];
const JoinedPost = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <div className="CeratedPosts">
        {posts.map(() => (
          <Post user={user} />
        ))}
      </div>
    </div>
  );
};

export default JoinedPost;
