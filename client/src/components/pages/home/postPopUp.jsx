
import {useState,useContext} from 'react';
import {UserContext} from '../../../context/userContext/userContext'
import {CreateComment} from '../../../services/commentService'
import {GetPostComment} from '../../../services/commentService'
import "./home.css"
function PostPopUp(props){
    const {user}=useContext(UserContext)
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
    return(
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={props.handleClose}>x</span>
            {props.content}
            <div>
            <input type="text" className="commentInput" onChange={onFieldChange} placeholder="comment on the post" name="commentText"/>
            <button type="button" onClick={MakeComment}>comment</button>
            </div>
          </div>
        </div>
      );
    
    }
    export default PostPopUp