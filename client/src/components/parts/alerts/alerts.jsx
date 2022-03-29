import React, { useEffect, useState } from "react";
import "./alerts.css"
import { GetAllAlert } from "../../../services/alertService"
import AlertsTemplate from "./alerts-template";
const AlertsPopUp = () => {
    return <AlertsTemplate/>
}
export default AlertsPopUp;