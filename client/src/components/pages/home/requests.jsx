import { useState,useContext,useEffect } from 'react';
import {UserContext} from "../../../context/userContext/userContext"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { MdOutlineDeleteOutline } from "react-icons/md";
import {GetRequestsByUserId} from '../../../services/alertService';
import {DeleteAlert} from '../../../services/alertService';
export default function Requests() { 
    const[requests,setRequests]=useState([])
    const{user,setUser}=useContext(UserContext)
    useEffect(()=>{
      const loadRequests= async ()=>{
        const id=localStorage.getItem("userId")
        const newRequests=await GetRequestsByUserId(id)
        setRequests(newRequests)
      }
      loadRequests()
    },[requests])
    const HandleRequestDelete=(id,i)=>{
          DeleteAlert(id)
      
          console.log(requests)
    }
  return (
      <div className="requestsContainer">
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {requests.map((item,i) => (
        <ListItem
          key={i}
          disableGutters
          secondaryAction={
            <IconButton onClick={()=>HandleRequestDelete(item._id,i)}>
               <MdOutlineDeleteOutline/>
            </IconButton>
          }
        >
          <ListItemText primary={`request to join ${item.postId}`} />
        </ListItem>
      ))}
    </List>
    </div>
  );
}
