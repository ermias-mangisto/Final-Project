import react, { useState , useContext} from "react";
import { UpdatePost } from "../../../services/postService";
import { ModeContext } from "../../../context/modeContext/ModeContext";

import * as React from "react";
import TextField from "@mui/material/TextField";

const EditPostPopUP = (props) => {
  const [editPost, setEditPost] = useState({});
  const {mode}=useContext(ModeContext);
  const onFieldChange = (e) => {
    const { name, value } = e.target;
    setEditPost({ ...editPost, [name]: value });
  };

  const DeletePost=()=>{
window.confirm("are you sure you want to delete this post?");
UpdatePost(props.postInfo._id,{archivePost:true})
.then(()=>{alert("Post deleted successfully!")})
.then(()=>{props.handleClose()})
  }

  const CreatePost = (e) => {
    e.preventDefault();
    UpdatePost(props.postInfo._id, editPost).then((res) => {});
    props.handleClose();
  };

  return (
    <div className="popup-box">
      <div className="box" style={{color:mode.colorTitle,border:mode.border,background:mode.backgroundScreen}}>
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <button className="delete-btn" style={{color:mode.colorTitle,border:mode.border,background:mode.backgroundScreen}} onClick={DeletePost}>
         Delete post
        </button>
        <article className="edit">
          <h1>edit post</h1>

          <form>
            <TextField
              sx={{ margin: 2 ,background:"white"}}
              id="outlined-basic"
              label="postName"
              name="postName"
              variant="outlined"
              onChange={onFieldChange}
              placeholder="Enter your post Name"
              type="string"
            />
            <TextField
              sx={{ margin: 2 ,background:"white"} }
              id="outlined-basic"
              label="postText"
              name="postText"
              variant="outlined"
              onChange={onFieldChange}
              placeholder="Enter your post Text"
              type="string"
            />
            <TextField
              sx={{ margin: 2  ,background:"white"}}
              id="outlined-basic"
              label="numberOfParticipants"
              name="numberOfParticipants"
              variant="outlined"
              onChange={onFieldChange}
              placeholder="Enter your number Of Participants"
              type="string"
            />
            <TextField
              sx={{ margin: 2 ,background:"white"}}
              id="outlined-basic"
              label="projectType"
              name="projectType"
              variant="outlined"
              onChange={onFieldChange}
              placeholder="Enter your project Type"
              type="type"
            />

            <button onClick={CreatePost} style={{color:mode.colorTitle,border:mode.border,background:mode.backgroundScreen}}>SAVE</button>
          </form>
        </article>
      </div>
    </div>
  );
};

export default EditPostPopUP;
