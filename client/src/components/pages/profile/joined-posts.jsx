import react, {  useEffect, useState ,useContext} from "react";
import { GetUserJoinedPosts } from "../../../services/userService";
import { ModeContext } from "../../../context/modeContext/ModeContext";
import "./join-posts.css";
import Post from "./post";
import { FaAward } from "react-icons/fa";
import { useParams } from "react-router-dom";
const JoinedPost = ({currentUser}) => {
 const {id} = useParams();
 const {mode}=useContext(ModeContext);
  const [joinPost, setJoinedPost] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
     
      const Post = await GetUserJoinedPosts(id);
      setJoinedPost(Post);
    };
    loadPosts();
  }, []);
  return (
    <div className="JoinedPostsComponent" >
       <h3 style={{color:mode.colorTitle}}> Posts I attended :</h3>
      <div className="JoinedPost">
       
        {joinPost.map((item) => (
          <Post postInfo={item} currentUser={currentUser} icon={<FaAward  style={{color:mode.colorTitle}} className="postIcon" />} />
        ))}
      </div>
    </div>
  );
};

export default JoinedPost;
