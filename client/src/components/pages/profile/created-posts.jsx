import react, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../context/userContext/userContext";
import { GetUserCreatedPosts } from "../../../services/userService";
import "./create-posts.css";
import { ModeContext } from "../../../context/modeContext/ModeContext";
import Post from "./post";
import { FaAward } from "react-icons/fa";
import { useParams } from "react-router-dom";
const CeratedPosts = ({currentUser}) => {
  const {id} = useParams();
  const {mode}=useContext(ModeContext);
  const [createPost, setCreatedPost] = useState([]);
  useEffect(() => {
    const loadPosts = async () => {
      const Post = await GetUserCreatedPosts(id);
      setCreatedPost(Post.filter(post => post.archivePost==false));
    };
    loadPosts();
  }, []);

  return (
    <div className="CeratedPostsComponent">
      <h3 className="h3" style={{color:mode.colorTitle}}>Posts I created :</h3> 
      <div className="CeratedPosts">
        {createPost.map((item) => (
          <Post postInfo={item}  currentUser={currentUser} icon={<FaAward className="postIcon" style={{color:mode.colorTitle}}/>} />
        ))}
      </div>

      <div></div>
    </div>
  );
};
export default CeratedPosts;
