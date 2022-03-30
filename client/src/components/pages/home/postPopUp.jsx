import { useBottomScrollListener } from "react-bottom-scroll-listener";
import {Link} from "react-router-dom"
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../context/userContext/userContext";
import { CreateComment } from "../../../services/commentService";
import { GetPostComment } from "../../../services/commentService";
import {CreateAlert} from "../../../services/alertService"
import "./home.css";
import Comment from './comments'
function PostPopUp(props){
    const {user}=useContext(UserContext)
    const [comments,setComments]=useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    useEffect(()=>{
        const loadComments=async()=>{
            setLoading(true);
           const newComments= await GetPostComment(props.postId,page);
           setComments((prev)=>[...prev,...newComments]);
            setLoading(false);
        }
       loadComments();
        
    },[page])
    
    const [comment,setComment]=useState({
      userId:user._id,
      postId:props.postId
    });
    const onFieldChange = (e) => {
        const { name, value } = e.target;
        setComment({ ...comment, [name]: value });
        
      };
    const MakeComment= async()=>{
      console.log(comment);
  await CreateComment(comment).then(()=>{alert("comment sent")})
  .then(()=>{CreateAlert({
    sendUserId:user._id,
    postId:props.postId,
    receiverUserId:props.postInfo.userId,
    type: "comment",

  })})

    }
    const scrollRef =useBottomScrollListener(()=>setPage(prev => prev + 1),console.log(page));
    const handleScroll = (event) => {
      const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
      if (scrollHeight - Math.round(scrollTop) == clientHeight) {
        setPage(prev => prev + 1);
      }}

  return (
    <div className="post-popup-box">
      <div className="post-box" onScroll={handleScroll} ref={scrollRef}>
        <span className="post-close-icon" onClick={props.handleClose}>
          close
        </span>
        <article className='post-PopUpCard' >
   <h1 className='post-nameTag'> 
   <Link to={`/profile/${props.postInfo.userId}`}>
      posted by:{props.name} </Link>
       on {props.postInfo.createdAt}</h1>
<div className='post-PopUpText'>
<h1>
 {`${props.postInfo.postName}-${props.postInfo.projectType}`}
      </h1>   
        <p>    { props.postInfo.postText}</p>
 <p>  Participants required: { props.postInfo.numberOfParticipants}</p>
 <p>  Technologies Required: { props.postInfo.technologiesRequired}</p>
       </div>
      </article>
        <div>
          <textarea
            type="text"
            className="post-commentInput"
            onChange={onFieldChange}
            placeholder="comment on the post"
            name="commentText"
          />
          <div className="comment-btn" >
          <button type="button" onClick={MakeComment}>
            comment
          </button></div>
        </div>
        {comments.map((comment, i) => {
          return <Comment commentInfo={comment} key={i} />;
        })}
      </div>
    </div>
  );
}
export default PostPopUp ;
