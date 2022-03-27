import react,{useState,useContext} from "react";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
 import {GetPostComment} from '../../../services/commentService'
import './home.css';
const Comment = (props) => {
    return (
        <div className="post-comment-box"> 
<h1>{props.commentInfo.commentText}</h1>
        </div>
    )
}
export default Comment;