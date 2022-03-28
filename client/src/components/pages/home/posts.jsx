import react,{useState,useContext} from "react";
import {PostContext} from "../../../context/postContext/PostContext";
import Post from "./post";
import {GetAllPost} from "../../../services/postService"
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Posts = () => {
    const {posts,setPosts,page, setPage,
        loading, setLoading} =useContext(PostContext)
      const[type,setType]=useState("All")
          useBottomScrollListener(()=>setPage(prev => prev + 1));
          const [value, setValue] =useState(0);

          const handleChange = (event, newValue) => {
            setValue(newValue);
          };
         const handleClick=(event) => {
setType(event.target.name)
         }
        
    
    return (
        <div className="postsContainer">
            <Box sx={{ width: '90%', bgcolor: 'background.paper' }}>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="All"  name="All"onClick={handleClick}/>
                <Tab label="mobile" name="mobile" onClick={handleClick} />
                <Tab label="web"  name="web" onClick={handleClick}/>
                <Tab label="desktop" name="desktop"onClick={handleClick}/>
                <Tab label="Game" name="game"onClick={handleClick}/>
               
              </Tabs>
            </Box>
         
{posts.map((post,i)=>{
    if(type=="All"){

        return <Post postInfo={post} key={i}/>
    }
    else if(post.projectType == type){
        return <Post postInfo={post} key={i}/>
    }
})}
        </div>
    )
}
export default Posts;