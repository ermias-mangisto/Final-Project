import react,{useState,useContext} from "react";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
 import {GetPostComment} from '../../../services/commentService'

const Comment = (props) => {
    
    return (
        <div>
            
<h1>{props.commentInfo.commentText}</h1>
        </div>
    )
}
export default Comment;