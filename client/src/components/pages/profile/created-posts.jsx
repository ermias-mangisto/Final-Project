import react, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../context/userContext/userContext";
import { GetUserCreatedPosts } from "../../../services/userService";
import "./create-posts.css";
import Post from "./post";
import { FaAward } from "react-icons/fa";
import { useParams } from "react-router-dom";
const CeratedPosts = ({currentUser}) => {
  const {id} = useParams();
  const [createPost, setCreatedPost] = useState([]);
  useEffect(() => {
    const loadPosts = async () => {
      const Post = await GetUserCreatedPosts(id);
      setCreatedPost(Post);
    };
    loadPosts();
  }, []);

  return (
    <div className="CeratedPostsComponent">
      <h3>Posts I created :</h3>
      <div className="CeratedPosts">
        {createPost.map((item) => (
          <Post postInfo={item}  currentUser={currentUser} icon={<FaAward className="postIcon" />} />
        ))}
      </div>
    </div>
  );
};
export default CeratedPosts;
