import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../../context/userContext/userContext";
import { AlertContext} from "../../../context/alertContext/AlertContext";
import { GetAllAlert } from "../../../services/alertService";
const CheckAlert = () => {
    const { user, setCounter } = useContext(UserContext);
    const { alert } = useContext(AlertContext)
    let count = 0;
    useEffect(() => {   //! when the component is didmount the setcounter doing assignment to counter According to count
        setCounter(count)
    })
    return (
        <div>
            {
                alert.map(data => {
                    if (localStorage.getItem("newAlert") === null) {
                        console.log("Ddd");
                        localStorage.setItem("newAlert", `${alert[alert.length - 1].createdAt}`);
                    }else if (data.receiverUserId == user._id) {
                        if (new Date(localStorage.getItem("newAlert")) < new Date(data.createdAt)) {
                            console.log(new Date(localStorage.getItem("newAlert"))+" "+"LOCAL STORAGE");
                            console.log(new Date(data.createdAt)+" "+"data base");
                            count++
                        }
                        console.log("false")
                    }
                })
            }
        </div>
    )
}
export default CheckAlert;
