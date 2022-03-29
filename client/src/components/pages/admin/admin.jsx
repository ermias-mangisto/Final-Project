import { useEffect, useState } from "react";
import AdminTable from "./admin-card";
import { GetAllReport } from "../../../services/reportService";
import ProfileDetails from "../profile/profile-details";
import CheckAlert from "../../parts/alerts/checkAlert";
const Admin = () => {
    return (
        <div>
            {/* <CheckAlert/> */}
            <ProfileDetails />
            <AdminTable />
        </div>
    )
}

export default Admin;