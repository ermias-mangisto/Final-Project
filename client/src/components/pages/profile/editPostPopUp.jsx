import react, { useState } from "react";
import { UpdatePost } from "../../../services/postService";

const EditPostPopUP = (props) => {
  const [editPost, setEditPost] = useState({});

  const onFieldChange = (e) => {
    const { name, value } = e.target;
    setEditPost({ ...editPost, [name]: value });
  };
  
  const CreatePost = (e) => {
    e.preventDefault();
    UpdatePost(props.postInfo._id, editPost).then((res) => {});
    props.handleClose();
  };
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <article className="edit">
          <h1>edit post</h1>
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

            <button onClick={CreatePost}>SAVE</button>
          </form>
        </article>
      </div>
    </div>
  );
};

export default EditPostPopUP;
