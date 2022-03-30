import {useState,useEffect ,useContext}  from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {GetAll} from "../../../services/userService"
import CreatePostPopUp from './createPostPopUp';
import Profile from "../../pages/profile/profile";
import { UserContext } from "../../../context/userContext/userContext";
import {Link} from "react-router-dom"
export default function SearchBar() {
  const{user}=useContext(UserContext)
  const [search,setSearch]=useState(false)
  useEffect(()=>{ 
    if(search===true){
       const loadUsers = async () =>{
       const newUsers = await GetAll()
       setUsers(newUsers)
        }
        loadUsers();
    }
    
  },[search]) 
  const [name,setName]=useState("")
  const [users,setUsers]=useState([])
   const [createPost,setCreatePost]= useState(false)
  function toggleSearchOff(){
    setSearch(false)
  }
  function toggleCreate(){
    setCreatePost(!createPost)
  }
   function SearchName(e){
     setName(e.target.value)  
     setSearch(true)
   }
     
  return (
      <div className="searchBar">
    <Paper
  
      component="form" 
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "99%" }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
      </IconButton>
      <InputBase
      onInput={SearchName}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search ' }}
  
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
      </IconButton>
    </Paper>{search &&  <div className="search-box" onMouseLeave={toggleSearchOff}>
           { users.map((user,i) => {
    let userName=`${user.firstName} ${user.lastName}`|| "";
  if (name === "") {
  return <div className="user-result" key={i}><Link to={`/profile/${user._id}`}>{user.firstName} {user.lastName}</Link></div>
  } else if (userName.toLowerCase().includes(name.toLowerCase())) {
    //returns filtered array
    return <div  className="user-result" key={i}><Link to={`/profile/${user._id}`}>{user.firstName} {user.lastName}</Link></div>
  }
})}
            </div>}
            {createPost && <CreatePostPopUp   id={user._id}handleClose={toggleCreate}/>} 
            <button className="create-post-btn" onClick={toggleCreate}>create</button>
          
            </div>
  );
}

