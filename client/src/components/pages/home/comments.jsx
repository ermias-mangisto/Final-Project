import react,{useState,useContext} from "react";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
 import {GetPostComment} from '../../../services/commentService'
import {Link} from "react-router-dom"
import './home.css';
const Comment = (props) => {
    return (
        <div className="post-comment-box"> 
<Link to={`/profile/${props.commentInfo.userId._id}`}>
    <span className="commentWriter">{props.commentInfo.userId.firstName}{props.commentInfo.userId.lastName}</span></Link>
<p>{props.commentInfo.commentText}</p>
        </div>
    )
}
export default Comment;