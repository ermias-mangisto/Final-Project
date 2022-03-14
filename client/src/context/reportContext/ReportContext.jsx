import React, { useEffect, useState } from "react";
import { GetAllReport } from "../../services/reportService";
export const ReportProvider = React.createContext();
export const ReportContext = ({children})=>{
const [report,setReport] = useState([])
useEffect(()=>{
    GetAllReport()
    .then(res => setReport(res))
},[])
return(
    <ReportProvider.Provider value={{report,setReport}}>
        {children}
    </ReportProvider.Provider>
)
}