import { useEffect, useState } from "react";
import AdminTable from "./admin-card";
import { GetAllReport } from "../../../services/reportService";
import ProfileDetails from "../profile/profile-details";
import { useParams } from "react-router-dom";
import { GetUserById } from "../../../services/userService"
import AlertsTemplate from "../../parts/alerts/alerts-template";
import CheckAlert from "../../parts/alerts/checkAlert";
import { AlertProvider } from "../../../context/alertContext/AlertContext";
const Admin = () => {
    const { id } = useParams()
    const [currentUser, setCurrentUser] = useState("");
    useEffect(() => {
        const loadCurrentUser = async () => {
            const newUser = await GetUserById(id);
            setCurrentUser(newUser);
        }
        loadCurrentUser();
    }, [])
    return (
        <div>
            <CheckAlert />
            <ProfileDetails currentUser={currentUser} />
            <AdminTable currentUser={currentUser} />
        </div>
    )
}

export default Admin;