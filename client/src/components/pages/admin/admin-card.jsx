import './admin.css'
import React,{useState,useContext,useEffect} from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { DeleteReport, GetAllReport } from '../../../services/reportService';
import { CreateAlert } from '../../../services/alertService';
import { CreateArchive } from '../../../services/archivedPostService';
import { DeletePost,UpdatePost } from '../../../services/postService';
import { GetPostById } from '../../../services/postService';
import { UserContext } from '../../../context/userContext/userContext';
import { GetUserById } from '../../../services/userService';
import { DeleteRequests } from "../../../services/alertService"
import PostPopUp from "../home/postPopUp"
import { ModeContext } from '../../../context/modeContext/ModeContext';
import {Link ,useNavigate} from "react-router-dom"
const AdminTable = ({currentUser}) => {
  const {user}=useContext(UserContext); 
  const {mode} = useContext(ModeContext);
  const [myProfile,setMyProfile] = useState(false)
  useEffect(() => {
if(currentUser._id === user._id) {
  setMyProfile(true)
}
  },[currentUser])
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const [report, setReport] = React.useState([]);
  React.useEffect(() => {
      GetAllReport()
          .then(data => setReport(data))
          .catch(err => console.error(err))

  }, [])
  // const CatchAndCreateArchive = (id) => {
  //   GetPostById(id)
  //     .then(res =>
  //       CreateArchive(res)
  //         .then(data => console.log(data))
  //         .catch(rej => console.error(rej))
  //     )
  //     .catch(err => console.error(err))
  // }

  const DeletePostFromTable = (object, id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      CreateAlert(object) //! CREATE ALERT
        .then(res => console.log(res))
        .catch(rej => console.error(rej));
      // CatchAndCreateArchive(id) //! CATCH OBJECT BY ID IN POST COLLECTION, AND CREATE NEW OBJECT IN ARCHIVE COLLECTION.
      UpdatePost(id,{archivePost:true}) //! DELETE POST
        .then(() =>
          alert("Post Deleted"))
        .catch(err => console.error(err))
      DeleteRequests(id)
    }
    console.log("error");
  }
  const DeleteReportFromTable = (id) => {  //!DELETE REPORT
    if (window.confirm("Are you sure you want to delete this report?")) {
      const RemoveReport = report.filter(item => item._id != id)
      setReport(RemoveReport);
      DeleteReport(id)
        .then(res => {return res})
        .catch(err => console.error(err))
    }
  }
  const GetUsersById = (id) => {
    GetUserById(id)
      .then(data => console.log(data))
      .catch(rej => console.error(rej))
  }
  const GetPostId = (id) => {
    GetPostById(id)
      .then(data => console.log(data))
      .catch(rej => console.error(rej))
  }
  return (
   <div className='table_details'>
   {  myProfile && <table className='table' >
        <thead>
          <tr  className='tr'>
            <th style={{background:mode.backgroundNav,color:mode.color}} className='tr'>User ID</th>
            <th style={{background:mode.backgroundNav,color:mode.color}} className='tr'>Post ID</th>
            <th style={{background:mode.backgroundNav,color:mode.color}} className='tr'>Post user ID</th>
            <th style={{background:mode.backgroundNav,color:mode.color}} className='tr'>text</th>
            <th style={{background:mode.backgroundNav,color:mode.color}} className='tr'>Delete Report</th>
            <th style={{background:mode.backgroundNav,color:mode.color}} className='tr'>Delete Post</th>
          </tr>
        </thead>
        <tbody>
          {
            report.map((item, i) =>
            <tr className='tr' key={i}>
                {isOpen && <PostPopUp
       postInfo={item.postId ==null? "id":item.postId}
        name={item.userId ==null? "id":item.userId.firstName}
        postId={item.postId ==null?"id":item.postId._id}
        handleClose={togglePopup}
      />}
                <td style={{background:mode.backgroundNav,color:mode.color}} className='tr'><Link to={`/profile/${item.userId ==null? "id" :item.userId._id}`}><span>{item.userId ==null? "id" :item.userId._id}</span></Link></td>
                <td style={{background:mode.backgroundNav,color:mode.color}} className='tr'><span onClick={togglePopup}>{item.postId ==null? "id" :item.postId._id}</span></td>
                <td style={{background:mode.backgroundNav,color:mode.color}} className='tr'><span onClick={() => GetUsersById(item.postUserId)}>{item.postUserId}</span></td>
                <td style={{background:mode.backgroundNav,color:mode.color}} className='tr'>{item.text}</td>
                <td style={{background:mode.backgroundNav,color:mode.color}} className='tr'><span onClick={() => DeleteReportFromTable(item._id)}><FaRegTrashAlt /></span></td>
                <td style={{background:mode.backgroundNav,color:mode.color}} className='tr' ><span onClick={() =>
                  DeletePostFromTable({
                    sendUserId:currentUser._id, //! USER._id
                    postId: item.postId,
                    receiverUserId: item.postUserId,
                    type: "deleted"
                  }, item.postId)
                }><FaRegTrashAlt /></span></td>
              </tr>
            )
          }
        </tbody>

      </table>}
    </div>
  );
}
export default AdminTable;