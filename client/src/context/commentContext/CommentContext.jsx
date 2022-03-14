import React, { useEffect, useState } from "react";
import { GetAllComment } from "../../services/commentService";
export const CommentProvider = React.createContext();
export const CommentContext = ({children})=>{
const [comment,setComment] = useState([])
useEffect(()=>{
    GetAllComment()
    .then(res => setComment(res))
},[])
return(
    <CommentProvider.Provider value={{comment,setComment}}>
        {children}
    </CommentProvider.Provider>
)
}