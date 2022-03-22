import React, { useEffect, useState, useContext } from "react";
import "./alerts.css"
import { GetAllAlert } from "../../../services/alertService"
import { UserContext } from "../../../context/userContext/userContext";
import AlertsTemplate from "./alerts-template";
const AlertsPopUp = () => {
    const [alert, setAlert] = useState([]);
    const { user, setUser } = useContext(UserContext)
    useEffect(() => {
        GetAllAlert()
            .then(data => setAlert(data))
            .catch(rej => console.error(rej))
    }, [])
    return (
        <div className="contain">
            {/* <article className="title_notification">
                <h1>Notification</h1>
            </article > */}
            <table className="table_data">
                <tr>
                    <th className="title_notification">Notification</th>
                </tr>
                <tr>
                    <td>{AlertsTemplate(user)}</td>

                    
                </tr>
                {/* {
                    alert.map((data,i)=>
                    data.receiverUserId == user._id?  
                      <tr className="tr_data" key={i}>
                          <td>your post {data.postId} was deleted by manager</td>
                      </tr>:
                      console.log(data)   
                    )
                } */}
                {/* <tr>
                    <td>AlertsPopUp</td>
                    <td>AlertsPopUp</td>
                    <td>AlertsPopUp</td>
                </tr>
                <tr>
                    <td>AlertsPopUp</td>
                    <td>AlertsPopUp</td>
                    <td>AlertsPopUp</td>
                </tr> */}

            </table>
            {/* <button onClick={}>click</button> */}

            {/* <div className="alerts_message"> */}

            {/* {
                    alert.map((data, i) =>

                        data.receiverUserId == user._id ?
                            <div key={i}>
                                <p>your post {data.postId} was deleted by manager  </p>
                            </div>:
                            <div></div>
                        //     if (data.receiverUserId == user._id) {
                        //  console.log(data)
                        //  <h1>{data.postId}</h1>
                        // <div key={i}>
                        //     <p>your post {data.postId} was deleted by manager  </p>
                        // </div>
                        //     }

                    
                    )
                } */}

            {/* <h2>yor post deleted by manager</h2>
                <h2>AlertsPopUp</h2>
                <h2>AlertsPopUp</h2>
                <h2>AlertsPopUp</h2>
                <h2>AlertsPopUp</h2>
                <h2>AlertsPopUp</h2>
                <h2>yor post deleted by manager</h2>
                <h2>AlertsPopUp</h2>
                <h2>AlertsPopUp</h2>
                <h2>AlertsPopUp</h2>
                <h2>AlertsPopUp</h2>
                <h2>AlertsPopUp</h2>
                <h2>yor post deleted by manager</h2>
                <h2>AlertsPopUp</h2>
                <h2>AlertsPopUp</h2>
                <h2>AlertsPopUp</h2>
                <h2>AlertsPopUp</h2>
                <h2>AlertsPopUp</h2> */}
            {/* </div> */}
        </div>

    )
}
export default AlertsPopUp;