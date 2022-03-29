import { useContext, useEffect, useRef, useState } from "react"
import "./alerts.css"
import { UserContext } from "../../../context/userContext/userContext"
import { CreateAlert, DeleteAlert, GetAllAlert } from "../../../services/alertService"
import { GetPostById, UpdatePost } from "../../../services/postService"
import { GetUserById, UpdateUser } from "../../../services/userService"
import { AlertContext } from "../../../context/alertContext/AlertContext"
import CheckAlert from "./checkAlert";
import {Link} from "react-router-dom"
const AlertsTemplate = () => {
    const { user, setCounter } = useContext(UserContext)
    const { alert, setAlert } = useContext(AlertContext)

    const GetYourPostId = (object) => {
        GetPostById(object) //! Get Post By Id
            .then(res => console.log(res))
    }
    const AcceptRequest = (newObject, postId, participantId) => {
        CreateAlert(newObject)
            .then(res => console.log(res))
            .catch(rej => console.error(rej))

        UpdatePost(postId, { $push: { participants: participantId } }) //! update array participants in post colleation
            .then(res => console.log(res))
            .catch(rej => console.error(rej))

        UpdateUser(participantId, { $push: { joinedPost: postId } }) //! update array joinedPost in user colleation
            .then(res => console.log(res))
            .catch(rej => console.error(rej))
    }
    const CancelRequest = (id) => {
        DeleteAlert(id)
            .then(res => console.log(res))
            .catch(rej => console.error(rej))
    }
    const GetSenderData = (userId,) => {
        GetUserById(userId)
            .then(res => console.log(res))
            .catch(rej => console.error(rej))

    }
    const DeleteTRow = async (data) => {
        const RenderAlerts = alert.filter(item => item._id != data._id);
        setAlert(RenderAlerts);
        await DeleteAlert(data._id)
            .then(res => console.log("gilad", res))
            .catch(rej => console.error(rej))
    }

    return (
        <div className="contain">
            <table className="table_data" >
                <thead>
                    <tr>
                        <th className="title_notification">Notification</th>
                    </tr>
                </thead>
                <tbody className="contain_tr">
                    {
                        alert.sort((a, b) => {
                            let dateA = new Date(a.createdAt)
                            let dateB = new Date(b.createdAt)
                            return dateB > dateA ? 1 : -1;
                        }).map((data, i) => {
                            if (data.receiverUserId === user._id) {
                                localStorage.setItem("newAlert", `${alert[0].createdAt}`);
                                switch (data.type.toLowerCase()) {
                                    case "deleted": {
                                        return (
                                            <tr className="tr_data" key={i}>
                                                <td>Your post was <span className="tr_delete" onClick={() => GetYourPostId(data.postId)}> DELETED </span>by manager<button onClick={() => DeleteTRow(data)} className="btn_deleteDeleteAlert">x</button> </td>
                                            </tr>
                                        )
                                    }
                                    case "join": {
                                        return (
                                            <tr className="tr_data" key={i} >
                                                <td> <Link to={`/profile/${data.sendUserId==null?"id":data.sendUserId._id}`}><span className="tr_userName">{data.sendUserId==null?"id":data.sendUserId.firstName}</span></Link> wants to join your team <button onClick={() => DeleteTRow(data)} className="btn_deleteJoin">x</button>
                                                    <span className="general_btn">
                                                        <button onClick={() => AcceptRequest({
                                                            sendUserId: user._id,
                                                            postId: data.postId,
                                                            receiverUserId: data.sendUserId,
                                                            type: "accepted"
                                                        }, data.postId, data.sendUserId)} className="ok_button">✔️</button>
                                                        <button onClick={() => CancelRequest(data._id)
                                                        } className="cancel_button">✖️</button>
                                                    </span></td>
                                            </tr>
                                        )
                                    }
                                    case "accepted": {
                                        return (
                                            <tr className="tr_data" key={i}>
                                                <td>You have been <span className="tr_accepted" onClick={() => GetYourPostId(data.postId)}>ACCEPTED</span> to web team <button onClick={() => DeleteTRow(data)} className="btn_deleteAccepted">x</button></td>
                                            </tr>
                                        )
                                    }
                                    case "comment": {
                                        return (
                                            <tr className="tr_data" key={i}>
                                                <td><span className="tr_comment" onClick={() => GetSenderData(data.sendUserId)}>SOMEONE</span> commented on your post <button onClick={() => DeleteTRow(data)} className="btn_deleteComment">x</button></td>
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
                </tbody>
            </table >
        </div >
    )
}
export default AlertsTemplate;