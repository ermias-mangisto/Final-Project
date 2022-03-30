import {CreateReport} from '../../../services/reportService'
import {useState,useContext}  from 'react';
import {UserContext} from '../../../context/userContext/userContext'
import "./home.css";

function ReportPopUp(props){
    const {user}=useContext(UserContext);
    const [reportPopUp, setReportPopUp] = useState(false);
    const [send,setSend]=useState(false);
    const [report, setReport] = useState({
        userId: user._id,
        postId:props.postInfo._id,
        postUserId:props.postInfo.userId
      });
    const MakeReportReason =(e)=>{
        setReport({...report,["text"]:e.target.name})
       setSend(true);
         }
    const MakeReport =(e)=>{
        CreateReport(report)
        .then((res)=>{alert("report sent successfully")})
        .then((res)=>props.handleClose());
        
         }
    return(
        <div className="report-popup-box" >
          <div className="report-box" >
            <span className="report-close-icon" onClick={props.handleClose}>close</span>
            <h1>pick one of the choices as the reason for the report</h1> 
            <div className="report-reason">
            <button onClick={MakeReportReason} name="Harassment"> Harassment</button>
            <button onClick={MakeReportReason} name="Hate"> Hate</button>
            <button onClick={MakeReportReason} name="Copyright violation"> Copyright violation</button>
            <button onClick={MakeReportReason} name="Misinformation"> Misinformation</button>
            <button onClick={MakeReportReason} name="Breaks site rules"> Breaks site rules</button>
            <button onClick={MakeReportReason} name="Impersonation"> Impersonation</button>
            <button onClick={MakeReportReason} name="Spam"> Spam</button>
            <button onClick={MakeReportReason} name="Sharing personal information"> Sharing personal information</button>
            <button onClick={MakeReportReason} name="Non-consensual intimate media"> Non-consensual intimate media</button>
            </div>
           {send &&<button onClick={MakeReport} className="send-report" name="bad"> send report</button>}
          </div>
        </div>
      );
    
    }
    export default ReportPopUp