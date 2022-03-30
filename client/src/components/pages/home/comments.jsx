import react,{useState,useContext} from "react";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
 import {GetPostComment} from '../../../services/commentService'
import {Link} from "react-router-dom"
import './home.css';
import { ModeContext } from "../../../context/modeContext/ModeContext";
const Comment = (props) => {
    const { mode } = useContext(ModeContext)
    return (
        <div className="post-comment-box"  style={{background:mode.backgroundScreen,color:mode.colorText}}> 
<Link to={`/profile/${props.commentInfo.userId._id}`}>
<<<<<<< HEAD
    <span className="commentWriter" style={{color:mode.colorTitle}}>{props.commentInfo.userId.firstName}</span></Link>
=======
    <span className="commentWriter">{props.commentInfo.userId.firstName}{props.commentInfo.userId.lastName}</span></Link>
>>>>>>> 440f15a2e02a6f279f478a55981439a954f55107
<p>{props.commentInfo.commentText}</p>
        </div>
    )
}
export default Comment;