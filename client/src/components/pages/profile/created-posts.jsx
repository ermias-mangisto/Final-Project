import react, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../context/userContext/userContext";
import { GetUserCreatedPosts } from "../../../services/userService";
import "./create-posts.css";
import Post from "./post";
import { FaAward } from "react-icons/fa";

const CeratedPosts = () => {
  const { user, setUser } = useContext(UserContext);
  const [createPost, setCreatedPost] = useState([]);
  useEffect(() => {
    const loadPosts = async () => {
      const id = localStorage.getItem("userId");
      const Post = await GetUserCreatedPosts(id);
      setCreatedPost(Post);
    };
    loadPosts();
  }, [user]);

  return (
    <div className="CeratedPostsComponent">
      <h3>Posts I created :</h3>
      <div className="CeratedPosts">
        {createPost.map((item) => (
          <Post
            postInfo={item}
            user={user}
            icon={<FaAward className="postIcon" />}
          />
        ))}
      </div>

      <div></div>
    </div>
  );
};
export default CeratedPosts;
