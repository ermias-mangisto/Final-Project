import { useState,useContext } from 'react';
import {UserContext} from "../../../context/userContext/userContext"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { MdOutlineDeleteOutline } from "react-icons/md";
export default function Requests() { 
    const[alerts,setAlerts]=useState([])
    const{user,setUser}=useContext(UserContext)
  return (
      <div className="requestsContainer">
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[1, 2, 3].map((value) => (
        <ListItem
          key={value}
          disableGutters
          secondaryAction={
            <IconButton>
               <MdOutlineDeleteOutline/>
            </IconButton>
          }
        >
          <ListItemText primary={`Line item ${value}`} />
        </ListItem>
      ))}
    </List>
    </div>
  );
}
