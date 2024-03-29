import { useContext, useEffect, useRef, useState } from "react"
import "./alerts.css"
import { UserContext } from "../../../context/userContext/userContext"
import { CreateAlert, DeleteAlert, GetAllAlert } from "../../../services/alertService"
import { GetPostById, UpdatePost } from "../../../services/postService"
import { GetUserById, UpdateUser } from "../../../services/userService"
import { AlertContext } from "../../../context/alertContext/AlertContext"
import { ModeContext } from "../../../context/modeContext/ModeContext"
import CheckAlert from "./checkAlert";
import { Link } from "react-router-dom";
import PostPopUp from "../../pages/home/postPopUp"
const AlertsTemplate = () => {
    const { mode } = useContext(ModeContext);
    const { user, setCounter } = useContext(UserContext)
    const { alerts, setAlert } = useContext(AlertContext)
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const GetYourPostId = (object) => {
        GetPostById(object) //! Get Post By Id
            .then(res => console.log(res))
    }
    const AcceptRequest = (newObject, postId, participantId, id) => {
        if (window.confirm("Are you sure that you to join this user to your team?")) {
            CreateAlert(newObject)
                .then(res => console.log(res))
                .catch(rej => console.error(rej))
            UpdatePost(postId, { $push: { participants: participantId } }) //! update array participants in post colleation
                .then(res => console.log(res))
                .catch(rej => console.error(rej))
            UpdateUser(participantId, { $push: { joinedPost: postId } }) //! update array joinedPost in user colleation
                .then(() => alert("user are added to your team"))
                .catch(rej => console.error(rej))
            const RenderAlerts = alerts.filter(item => item._id != id);
            setAlert(RenderAlerts);
            DeleteAlert(id)
                .then(res => console.log(res))
                .catch(rej => console.error(rej))
        }

    }
    const CancelRequest = (id) => {
        DeleteAlert(id)
            .then(res => console.log(res))
            .catch(rej => console.error(rej))
        const RenderAlerts = alerts.filter(item => item._id != id);
        setAlert(RenderAlerts);
    }
    const GetSenderData = (userId,) => {
        GetUserById(userId)
            .then(res => console.log(res))
            .catch(rej => console.error(rej))

    }
    const DeleteTRow = async (data) => {
        const RenderAlerts = alerts.filter(item => item._id != data._id);
        setAlert(RenderAlerts);
        await DeleteAlert(data._id)
            .then(res => console.log("gilad", res))
            .catch(rej => console.error(rej))
    }
    return (
        <div className="contain">
            <table className="table_data" style={{ color: mode.colorTitle, border: mode.border, background: mode.backgroundScreen }}>
                <thead>
                    <tr>
                        <th className="title_notification" style={{ color: mode.colorTitle, border: mode.border, background: mode.backgroundScreen }}>Notification</th>
                    </tr>
                </thead>
                <div className="contain_tr">
                    {
                        alerts.sort((a, b) => {
                            let dateA = new Date(a.createdAt)
                            let dateB = new Date(b.createdAt)
                            return dateB > dateA ? 1 : -1;
                        }).map((data, i) => {
                            if (data.receiverUserId === user._id) {
                                localStorage.setItem("newAlert", `${alerts[0].createdAt}`);
                                switch (data.type.toLowerCase()) {
                                    case "deleted": {
                                        return (
                                            <tr className="tr_data" key={i} style={{ color: mode.colorTitle, border: mode.border, background: mode.backgroundScreen }}>
                                                <td style={{ border: mode.border }}>Your post {data.postId.postName} was <span className="tr_delete" onClick={() => GetYourPostId(data.postId)}> DELETED </span>by manager<button onClick={() => DeleteTRow(data)} className="btn_deleteDeleteAlert">x</button> </td>
                                            </tr>
                                        )
                                    }
                                    case "join": {
                                        return (
                                            <tr className="tr_data" key={i} style={{ color: mode.colorTitle, border: mode.border, background: mode.backgroundScreen }} >
                                                <td style={{ border: mode.border }}> <Link to={`/profile/${data.sendUserId == null ? "id" : data.sendUserId._id}`}><span className="tr_userName">{data.sendUserId == null ? "id" : data.sendUserId.firstName}</span></Link> wants to join your {data.postId == null ? "id" : data.postId.postName} team <button onClick={() => DeleteTRow(data)} className="btn_deleteJoin">x</button>
                                                    <span className="general_btn">
                                                        <button onClick={() => AcceptRequest({
                                                            sendUserId: user._id,
                                                            postId: data.postId._id,
                                                            receiverUserId: data.sendUserId._id,
                                                            type: "accepted"
                                                        }, data.postId._id, data.sendUserId._id, data._id)} className="ok_button">✔️</button>
                                                        <button onClick={() => CancelRequest(data._id)
                                                        } className="cancel_button">✖️</button>
                                                    </span></td>
                                            </tr>
                                        )
                                    }
                                    case "accepted": {
                                        return (
                                            <tr className="tr_data" key={i} style={{ color: mode.colorTitle, border: mode.border, background: mode.backgroundScreen }}>
                                                {isOpen && <PostPopUp
                                                    postInfo={data.postId == null ? "id" : data.postId}
                                                    name={data.sendUserId == null ? "id" : data.sendUserId.firstName}
                                                    postId={data.postId == null ? "id" : data.postId._id}
                                                    handleClose={togglePopup}
                                                />}
                                                <td style={{ border: mode.border }}>You have been <span className="tr_accepted" >ACCEPTED</span > to <span onClick={togglePopup}>{data.postId.postName == null ? "id" : data.postId.postName}</span> team <button onClick={() => DeleteTRow(data)} className="btn_deleteAccepted">x</button></td>
                                            </tr>
                                        )
                                    }
                                    case "comment": {
                                        return (
                                            <tr className="tr_data" key={i} style={{ color: mode.colorTitle, border: mode.border, background: mode.backgroundScreen }}>
                                                {isOpen && <PostPopUp
                                                    postInfo={data.postId == null ? "id" : data.postId}
                                                    name={data.receiverUserId == null ? "id" : data.receiverUserId.firstName}
                                                    postId={data.postId == null ? "id" : data.postId._id}
                                                    handleClose={togglePopup}
                                                />}
                                                <td style={{ border: mode.border }}><Link to={`/profile/${data.sendUserId == null ? "id" : data.sendUserId._id}`}><span className="tr_comment" >{data.sendUserId == null ? "id" : data.sendUserId.firstName}</span></Link> commented on your <span onClick={togglePopup}>{data.postId.postName == null ? "id" : data.postId.postName}</span> post <button onClick={() => DeleteTRow(data)} className="btn_deleteComment">x</button></td>
                                            </tr>
                                        )
                                    }
                                    default:
                                        console.log("error");
                                        break;
                                }
                            }
                        }
                        )

                    }
                </div>
            </table >
        </div >
    )
}
export default AlertsTemplate;