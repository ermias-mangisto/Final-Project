import react, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../context/userContext/userContext";
import "./create-posts.css";
import { GetUserCreatedPosts } from "../../../services/userService";
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
          <Post postInfo={item} icon={<FaAward className="postIcon" />} />
        ))}
      </div>
    </div>
  );
};
export default CeratedPosts;
