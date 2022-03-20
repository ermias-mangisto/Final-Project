import react,{useState,useContext} from "react";
import {PostContext} from "../../../context/postContext/PostContext";
import Post from "./post";
import {GetAllPost} from "../../../services/postService"
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
 

const Posts = () => {
    const {posts,setPosts,page, setPage,
        loading, setLoading} =useContext(PostContext)

          useBottomScrollListener(()=>setPage(prev => prev + 1));
    return (
        <div>
            
{posts.map((post,i)=>{
    return <Post postInfo={post} key={i}/>
})}
        </div>
    )
}
export default Posts;