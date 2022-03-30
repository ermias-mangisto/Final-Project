import {useState ,useContext} from "react";
import "./home.css";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {CreatePost} from "../../../services/postService"
import { UserContext } from "../../../context/userContext/userContext";
import { ModeContext } from "../../../context/modeContext/ModeContext";
function CreatePostPopUp(props){
 const { mode } = useContext(ModeContext);
 const [post,setPost]=useState({
    userId:props.id
 })
 const onFieldChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
    CreatePost(post,props.id)
    .then((res) =>{
        alert("post published")
        props.handleClose()
    })

}
    return(
        <div className="create-post-popup-box" >
 
          <div className="create-post-box"style={{background:mode.backgroundScreen,color:mode.colorTitle}}>
            <h1>Create Post</h1>
            <span className="create-post-close-icon" onClick={props.handleClose} style={{color:mode.colorTitle}}>close</span>
            <form onSubmit={handleSubmit}>

            <TextField style={{background:"white"}} sx={{margin:"auto" , width:"80%"}} id="outlined-basic" label="post-name"name="postName" variant="outlined" onChange={onFieldChange} placeholder="write your post-name" type="text" required/>
            <TextareaAutosize aria-label="minimum height"  minRows={15} label="post-text" name="postText" onChange={onFieldChange}  style={{ background:"white",width: "80%" ,margin:"auto"}} required
      placeholder="write the idea of your project add as many details as you can " minLength={200}/>
            <TextField style={{background:"white"}}  sx={{margin:"auto" , width:"80%"}} id="outlined-basic" label="number Of Participants"name="numberOfParticipants" variant="outlined" onChange={onFieldChange} placeholder="chose how many people you need" type="number" required/>
            <TextField style={{background:"white"}}  sx={{margin:"auto" , width:"80%"}} id="outlined-basic" label="technologies Required"name="technologiesRequired" variant="outlined" onChange={onFieldChange} placeholder="write down all technologies and languages you are going to need" type="text" required/>
            <Box style={{background:"white"}} sx={{ width: "80%" , margin:"auto"}}>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">project-Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="project-Type"
          name="projectType"
          onChange={onFieldChange}
          required
        >
          <MenuItem value={"web"}>web</MenuItem>
          <MenuItem value={"mobile"}>mobile</MenuItem>
          <MenuItem value={"desktop"}>desktop</MenuItem>
          <MenuItem value={"game"}>game</MenuItem>
          <MenuItem value={"System Software"}>System Software</MenuItem>
          <MenuItem value={"data Software"}>data Software</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <button className="create-button" style={{background:mode.backgroundScreen,color:mode.colorTitle,border:mode.border}}>create</button>
            </form>
          </div>
        </div>
      );
    
    }
    export default CreatePostPopUp
