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
    UpdateUser(user._id, editUser).then((res) => {});
    props.handleClose();
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <article className="edit">
          <h1>Edit profile</h1>
          <form>
            <label>
              firstName:
              <input
                onChange={onFieldChange}
                name="firstName"
                type="text"
                defaultValue={user.firstName}
              />
            </label>
            <label>
              lastName:
              <input
                onChange={onFieldChange}
                name="lastName"
                type="text"
                defaultValue={user.lastName}
              />
            </label>
            <label>
              email:
              <input
                onChange={onFieldChange}
                name="email"
                type="email"
                defaultValue={user.email}
              />
            </label>
            <label>
              phone:
              <input
                defaultValue={user.phoneNumber}
                onChange={onFieldChange}
                name="phoneNumber"
                type="number"
              />
            </label>
            <label>
              image:
              <input
                defaultValue={user.image}
                onChange={onFieldChange}
                name="image"
                type="string"
              />
            </label>
            <label>
              <textarea
                defaultValue={user.summary}
                className="summary"
                onChange={onFieldChange}
                name="summary"
                type="text"
              />
            </label>
            <button onClick={CreateProfile}>SAVE</button>
          </form>
        </article>
      </div>
    </div>
  );
};

export default EditPopUP;
