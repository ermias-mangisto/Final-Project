import react, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext/userContext";
import { GetUserJoinedPosts } from "../../../services/userService";
// import "./join-posts.css";
import Post from "./post";
import { FaAward } from "react-icons/fa";

const JoinedPost = () => {
  const { user, setUser } = useContext(UserContext);
  const [joinPost, setJoinedPost] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const id = localStorage.getItem("userId");
      const Post = await GetUserJoinedPosts(id);
      setJoinedPost(Post);
    };
    loadPosts();
  }, [user]);

  return (
    <div className="JoinedPostsComponent">
      <div className="JoinedPost">
        {joinPost.map((item) => (
          <Post postInfo={item} icon={<FaAward className="postIcon" />} />
        ))}
      </div>
    </div>
  );
};

export default JoinedPost;
