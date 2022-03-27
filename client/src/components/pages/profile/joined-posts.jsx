import react, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext/userContext";
import { GetUserCreatedPosts } from "../../../services/userService";
// import { GetUserJoinedPosts } from "../../../services/userService";

import "./join-posts.css";
import Post from "./post";
import { FaAward } from "react-icons/fa";

const JoinedPost = () => {
  const { user, setUser } = useContext(UserContext);
  const [joinPost, setJoinedPost] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const id = localStorage.getItem("userId");
      const Post = await GetUserCreatedPosts(id);
      // const Post = await GetUserJoinedPosts(id);
      setJoinedPost(Post);
    };
    loadPosts();
  }, [user]);
  console.log("joinPost", joinPost);
  return (
    <div className="JoinedPostsComponent">
       <h3> Posts I attended :</h3>
      <div className="JoinedPost">
       
        {joinPost.map((item) => (
          <Post postInfo={item} icon={<FaAward className="postIcon" />} />
        ))}
      </div>
    </div>
  );
};

export default JoinedPost;
