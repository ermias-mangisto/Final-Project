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
        const newRequests=await GetRequestsByUserId(user._id)
        setRequests(newRequests)
      }
      loadRequests()
    },[user])
    const HandleRequestDelete=(id,i)=>{
          DeleteAlert(id)
          const updatedRequests= requests.filter(item=>item._id != id)
          setRequests(updatedRequests)
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
          <ListItemText primary={`request to join ${item.postId.postName}`} />
        </ListItem>
      ))}
    </List>
    </div>
  );
}
