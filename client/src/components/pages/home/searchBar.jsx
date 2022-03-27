import {useState,useEffect}  from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {GetAll} from "../../../services/userService"
import CreatePostPopUp from './createPostPopUp';
import Profile from "../../pages/profile/profile";
export default function SearchBar() {
  const [search,setSearch]=useState(false)
  const [name,setName]=useState("")
  const [users,setUsers]=useState([])
   const [createPost,setCreatePost]= useState(false)

  const loadUsers = async() =>{
     const newUsers =await GetAll()
     setUsers(newUsers)
     console.log(users)
     setSearch(true)
      }
  function toggleSearchOff(){
    setSearch(false)
  }
  function toggleCreate(){
    setCreatePost(!createPost)
  }
   function SearchName(e){
    setSearch(true)
     setName(e.target.value)
   }
 
  
  return (
      <div className="searchBar">
    <Paper
  
      component="form" 
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 700 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
      </IconButton>
      <InputBase
      onChange={SearchName}
      onMouseEnter={loadUsers}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search ' }}
  
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
      </IconButton>
    </Paper>{search&&  <div className="search-box" onMouseLeave={toggleSearchOff}>
           {users.map((user,i) => {
    let userName=user.firstName || "";
  if (name === "") {
  return <div className="user-result" key={i} onClick={Profile(user)}>{user.firstName} {user.lastName}</div>
  } else if (userName.toLowerCase().includes(name.toLowerCase())) {
    //returns filtered array
    return <div  className="user-result" key={i}>{user.firstName} {user.lastName}</div>
  }
})}
            </div>}
            {createPost && <CreatePostPopUp handleClose={toggleCreate}/>} 
            <button className="create-post-btn" onClick={toggleCreate}>create</button>
          
            </div>
  );
}

