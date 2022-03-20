import "./editpopup.css";
import react, { useContext, useState } from "react";
import { UserContext } from "../../../context/userContext/userContext";
import { UpdateUser } from "../../../services/userService";

const EditPopUP = (props) => {
  const { user, setUser } = useContext(UserContext);
  const [editUser, setEditUser] = useState({});

  const onFieldChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  const CreateProfile = (e) => {
    e.preventDefault();
    UpdateUser(user._id, editUser).then((res) => {}
    )
    props.handleClose()
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <article className="edit">
          <h1>edit</h1>
          <form>
            <label>
              lastName:
              <input onChange={onFieldChange} name="lastName" type="text" />
            </label>
            <label>
              firstName:
              <input onChange={onFieldChange} name="firstName" type="text" />
            </label>
            <label>
              email:
              <input onChange={onFieldChange} name="email" type="email" />
            </label>
            <label>
              phone:
              <input
                onChange={onFieldChange}
                name="phoneNumber"
                type="number"
              />
            </label>
            <label>
              summary:
              <input onChange={onFieldChange} name="summary" type="text" />
            </label>
            <button onClick={CreateProfile}>SAVE</button>
          </form>
        </article>
      </div>
    </div>
  );
};

export default EditPopUP;
