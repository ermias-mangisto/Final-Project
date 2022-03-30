import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../../context/userContext/userContext";
import { AlertContext} from "../../../context/alertContext/AlertContext";
import { GetAllAlert } from "../../../services/alertService";
const CheckAlert = () => {
    const { user, setCounter } = useContext(UserContext);
    const { alerts } = useContext(AlertContext)
    let count = 0;
    useEffect(() => {   //! when the component is didmount the setcounter doing assignment to counter According to count
        setCounter(count)
    })
    return (
        <div>
            {   
                alerts?
                alerts.map(data => {
                    if (localStorage.getItem("newAlert") === null) {
                        localStorage.setItem("newAlert", `${alert[alert.length - 1].createdAt}`);
                    }else if (data.receiverUserId == user._id) {
                        if (new Date(localStorage.getItem("newAlert")) < new Date(data.createdAt)) {
                            count++
                            console.log(count);
                        }
                        console.log("false")
                    }
                }):
                console.log("l")
            }
        </div>
    )
}
export default CheckAlert;
