import { useEffect, useState } from "react";
import BasicTable from "./admin-card";
import { GetAllReport } from "../../../services/reportService";
const Admin = () => {
const [report,setReport] = useState([]);
useEffect(()=>{
    GetAllReport()
    .then(data => setReport(data))
    .catch(err => console.error(err))
},[])
return (
        <div>
            <div>
                <BasicTable array={report}/>                
            </div>
        </div>
)
}
    
export default Admin;