import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import {useState,useContext,useEffect} from 'react';
import {UserContext} from '../../../context/userContext/userContext';
import {CreateComment} from '../../../services/commentService';
import {GetPostComment} from '../../../services/commentService';
import {CommentContext} from '../../../context/commentContext/CommentContext'
import "./home.css";
import Comment from './comments'
function PostPopUp(props){
    const {user}=useContext(UserContext)
    const [comments,setComments]=useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const loadComments=async()=>{
            setLoading(true);
            const newComments=await  GetPostComment(page,props.postId);
            console.log(comments);
            // setComments((prev)=>[...prev,...newComments]);
            // setLoading(false);
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
  await CreateComment(comment)
    }
    const scrollRef =useBottomScrollListener(()=>setPage(prev => prev + 1));

    return(
        <div className="popup-box" ref={scrollRef}>
          <div className="box">
            <span className="close-icon" onClick={props.handleClose}>x</span>
            {props.content}
            <div>
            <textarea type="text" className="commentInput" onChange={onFieldChange} placeholder="comment on the post" name="commentText"/>
            <button type="button" onClick={MakeComment}>comment</button>
            </div>
            {comments.map((comment,i)=>{
    return <Comment commentInfo={comment} key={i}/>
})}
          </div>
        </div>
      );
    
    }
    export default PostPopUp