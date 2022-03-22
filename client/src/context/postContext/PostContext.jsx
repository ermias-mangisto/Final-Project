import React, { useEffect, useState } from "react";
import { GetAllPost } from "../../services/postService";
export const PostContext = React.createContext();
export const PostProvider = ({children})=>{
const [posts,setPosts] = useState([])
const [loading, setLoading] = useState(true);
const [page, setPage] = useState(1);
useEffect(()=>{
    const loadPosts=async()=>{
        setLoading(true);
        const newPosts=await  GetAllPost(page);
        console.log(posts);
        setPosts((prev)=>[...prev,...newPosts]);
        setLoading(false);
    }
   loadPosts();
    
},[page])
return(
    <PostContext.Provider value={{
        posts,setPosts,
        page, setPage,
        loading, setLoading
    }}>
        {children}
    </PostContext.Provider>
    
    
)
}