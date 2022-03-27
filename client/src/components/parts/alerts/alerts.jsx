import React, { useEffect, useState, useContext } from "react";
import "./alerts.css"
import { CreateAlert, DeleteAlert, GetAllAlert } from "../../../services/alertService"
import { UserContext } from "../../../context/userContext/userContext";
import AlertsTemplate from "./alerts-template";
import { GetPostById, UpdatePost } from "../../../services/postService";
import { GetUserById, UpdateUser } from "../../../services/userService";
const AlertsPopUp = () => {
    const { user } = useContext(UserContext)
    const [alert, setAlert] = useState([]);
    useEffect(() => {
        GetAllAlert()
            .then(data => setAlert(data))
            .catch(rej => console.error(rej))
    }, [])
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
    return (
        <div className="contain">
            <table className="table_data">
                <tr>
                    <th className="title_notification">Notification</th>
                </tr>
                <div className="contain_tr">
                    {
                         alert.sort((a, b) => {
                            let dateA = new Date(a.createdAt)
                            let dateB = new Date(b.createdAt)
                            return dateB > dateA ? 1 : -1; 
                        }).map((data, i) => {
                            if (data.receiverUserId === user._id) {
                                switch (data.type.toLowerCase()) {
                                    case "deleted": {
                                        return (
                                            <tr className="tr_data" key={i}>
                                                <td>Your post was <span className="tr_delete" onClick={() => GetYourPostId(data.postId)}> DELETED </span>by manager</td>
                                            </tr>
                                        )
                                    }
                                    case "join": {
                                        return (
                                            <tr className="tr_data" key={i}>
                                                <td> <span className="tr_userName" onClick={() => GetSenderData(data.sendUserId)}>SOMEONE</span> wants to join your team
                                                    <span className="general_btn">
                                                        <button onClick={() => AcceptRequest({
                                                            sendUserId: user._id,
                                                            postId: data.postId,
                                                            receiverUserId: data.sendUserId,
                                                            type: "accepted"
                                                        }, data.postId, data.sendUserId,)} className="ok_button">✔️</button>
                                                        <button onClick={() => CancelRequest(data._id)
                                                        } className="cancel_button">✖️</button>
                                                    </span></td>
                                            </tr>
                                        )
                                    }
                                    case "accepted": {
                                        return (
                                            <tr className="tr_data" key={i}>
                                                <td>You have been <span className="tr_accepted" onClick={() => GetYourPostId(data.postId)}> ACCEPTED </span> to web team </td>
                                            </tr>
                                        )
                                    }
                                    case "comment": {
                                        return (
                                            <tr className="tr_data" key={i}>
                                                <td><span className="tr_comment" onClick={() => GetSenderData(data.sendUserId)}>SOMEONE</span> commented on your post </td>
                                            </tr>
                                        )
                                    }
                                    default:
                                        <tr className="tr_data" key={i}>
                                        <td>No Notification send</td>
                                    </tr>
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
export default AlertsPopUp;