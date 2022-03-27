import { useEffect, useState } from "react";
import AdminTable from "./admin-card";
import { GetAllReport } from "../../../services/reportService";
import ProfileDetails from "../profile/profile-details";
const Admin = () => {
const [report,setReport] = useState([]);
useEffect(()=>{
    GetAllReport()
    .then(data => setReport(data))
    .catch(err => console.error(err))
},[])
return (
        <div>
            <ProfileDetails/>
            <AdminTable array={report}/>                   
        </div>
)
}
    
export default Admin;