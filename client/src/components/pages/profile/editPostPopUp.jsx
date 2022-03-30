import react, { useState , useContext} from "react";
import { UpdatePost } from "../../../services/postService";
import { ModeContext } from "../../../context/modeContext/ModeContext";
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
          <h1>Edit post</h1>
          <form>
            <label>
              post Name:
              <input onChange={onFieldChange} name="postName" type="text" />
            </label>
            <label>
              post Text:
              <input onChange={onFieldChange} name="postText" type="text" />
            </label>

            <label>
              number Of Participants:
              <input
                onChange={onFieldChange}
                name="numberOfParticipants"
                type="text"
              />
            </label>

            <label>
              technologies Required:
              <input
                onChange={onFieldChange}
                name="technologiesRequired"
                type="text"
              />
            </label>

            <label>
              project Type:
              <input onChange={onFieldChange} name="projectType" type="text" />
            </label>

            <label>
              participants:
              <input onChange={onFieldChange} name="participants" type="text" />
            </label>

            <button onClick={CreatePost} style={{color:mode.colorTitle,border:mode.border,background:mode.backgroundScreen}}>SAVE</button>
          </form>
        </article>
      </div>
    </div>
  );
};

export default EditPostPopUP;
