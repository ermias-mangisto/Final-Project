import react, {  useEffect, useState } from "react";
import { GetUserJoinedPosts } from "../../../services/userService";

import "./join-posts.css";
import Post from "./post";
import { FaAward } from "react-icons/fa";
import { useParams } from "react-router-dom";
const JoinedPost = ({currentUser}) => {
 const {id} = useParams();
  const [joinPost, setJoinedPost] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
     
      const Post = await GetUserJoinedPosts(id);
      setJoinedPost(Post);
    };
    loadPosts();
  }, []);
  return (
    <div className="JoinedPostsComponent">
       <h3> Posts I attended :</h3>
      <div className="JoinedPost">
       
        {joinPost.map((item) => (
          <Post postInfo={item} currentUser={currentUser} icon={<FaAward className="postIcon" />} />
        ))}
      </div>
    </div>
  );
};

export default JoinedPost;
