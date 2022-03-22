import { useContext } from "react"
import { GetAllAlert } from "../../../services/alertService"
import { UserContext } from "../../../context/userContext/userContext"
const AlertArray = [];
const AlertsTemplate = (user) => {
    GetAllAlert()
        .then(data => AlertArray.push(data))
        .catch(rej => console.error(rej))
        console.log(AlertArray);
        AlertArray.forEach((data, i) => {
        console.log(data.receiverUserId == user._id);
        // if (data.receiverUserId == user._id) {
        //     switch (data.type) {
        //         case "deleted".toLowerCase():
        //             return `YOUR POST ${data.postId} WAS DELETED BY MANAGER `
        //         case "join".toLowerCase():
        //             return `ERMI WANTS TO JOIN TO YOUR TEAM `
        //         case "accepted".toLowerCase():
        //             return `YOU WERE ACCEPTED INTO THE TEAM  `
        //         case "comment".toLowerCase():
        //             return `DAVE COMMENTED ON YOUR POST`
        //         default:
        //             break;
        //     }
        // }
    });
    
}
export default AlertsTemplate;