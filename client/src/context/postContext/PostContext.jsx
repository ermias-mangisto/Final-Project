import React, { useEffect, useState } from "react";
import { GetAllPost } from "../../services/postService";
export const PostProvider = React.createContext();
export const PostContext = ({children})=>{
const [post,setPost] = useState([])
useEffect(()=>{
    GetAllPost()
    .then(res => setPost(res))
},[])
return(
    <PostProvider.Provider value={{post,setPost}}>
        {children}
    </PostProvider.Provider>
)
}