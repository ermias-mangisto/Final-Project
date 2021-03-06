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
import { ModeContext } from '../../../context/modeContext/ModeContext';
export default function Requests() { 
    const[requests,setRequests]=useState([])
    const { mode } = useContext(ModeContext)
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
      <div className="requestsContainer"  style={{ color: mode.colorTitle, background: mode.backgroundScreen }}>
        <h1>Requests Sent</h1> 
        <div className="requestsBox">
    <List className="requestsList" sx={{ width: '100%', maxWidth: "360", bgcolor: ''}}>
      {requests.map((item,i) => (
        <ListItem
        style={{ border: mode.border}}
        sx={{border: '1px solid black', borderRadius: '10px',padding: '10px',margin:"auto", width: '90%'}}
          key={i}
          disableGutters
          secondaryAction={
            <IconButton onClick={()=>HandleRequestDelete(item._id,i)} style={{color:mode.colorTitle}}>
               <MdOutlineDeleteOutline/>
            </IconButton>
          }
        >
          <ListItemText primary={`Sent To ${item.postId.postName} `} />
        </ListItem>
      ))}
    </List></div>
    </div>
  );
}
