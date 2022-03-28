import React, { useEffect, useState } from "react";
import "./alerts.css"
import { GetAllAlert } from "../../../services/alertService"
import AlertsTemplate from "./alerts-template";
const AlertsPopUp = () => {
    // const [alert, setAlert] = useState([]);
    // useEffect(() => {
    //     GetAllAlert()
    //         .then(data => setAlert(data))
    //         .catch(rej => console.error(rej))
    // }, [])
    // return <AlertsTemplate array={alert}/>
    return <AlertsTemplate/>
}
export default AlertsPopUp;