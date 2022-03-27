import { useContext, useEffect, useState } from "react"
import { GetAllAlert } from "../../../services/alertService"
import { UserContext } from "../../../context/userContext/userContext"
const AlertArray = [];
const AlertsTemplate = (user) => {
    const [alert, setAlert] = useState([])
    useEffect(() => {
        GetAllAlert()
            .then(data => setAlert(data))
            .catch(rej => console.error(rej))
    }, [])

    return (
        <div>
            {
                alert.map((data, i) => {
                    if (data.receiverUserId == user._id) {
                        switch (data.type) {
                            case "Your post is deleted": {
                                return (
                                    <tr>
                                        <td>YOUR POST {data.postId} WAS DELETED BY MANAGER</td>
                                    </tr>
                                )
                            }
                            case "join".toLowerCase(): {
                                return (
                                    <tr>
                                        <td>YOUR POST {data.postId} WAS DELETED BY MANAGER</td>
                                    </tr>
                                )
                            }
                            case "accepted".toLowerCase(): {
                                return (
                                    <tr>
                                        <td>YOUR POST {data.postId} WAS DELETED BY MANAGER</td>
                                    </tr>
                                )
                            }
                            case "comment".toLowerCase(): {
                                return (
                                    <tr>
                                        <td>YOUR POST {data.postId} WAS DELETED BY MANAGER</td>
                                    </tr>
                                )
                            }
                            default:
                                console.log("not match")
                                break;
                        }
                    }

                }
                )
            }
        </div>
    )
}
export default AlertsTemplate;