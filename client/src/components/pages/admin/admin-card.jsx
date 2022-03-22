import './admin.css'
import * as React from 'react';
import ProfileDetails from '../profile/profile-details';
import { FaRegTrashAlt } from "react-icons/fa";
import { DeleteReport } from '../../../services/reportService';
import { CreateAlert } from '../../../services/alertService';
import { CreateArchive } from '../../../services/archivedPostService';
import { DeletePost } from '../../../services/postService';
import { GetPostById } from '../../../services/postService';
const AdminTable = (props) => {
  const CatchAndCreateArchive = (id) => {
    GetPostById(id)
      .then(res =>
        CreateArchive(res)
        .then(data => console.log(data))
        .catch(rej => console.error(rej))
      )
      .catch(err => console.error(err))
  }
  const DeletePostFromTable = (object, id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      CreateAlert(object) //! CREATE ALERT
        .then(res => console.log(res))
        .catch(rej => console.error(rej));
      CatchAndCreateArchive(id) //! CATCH OBJECT BY ID IN POST COLLECTION, AND CREATE NEW OBJECT IN ARCHIVE COLLECTION.
      DeletePost(id) //! DELETE POST
        .then(() =>
          alert("Post Deleted"))
        .catch(err => console.error(err))
    }
    console.log("error");
  }
  const DeleteReportFromTable = (id) => {  //!DELETE REPORT
    if (window.confirm("Are you sure you want to delete this report?")) {
      DeleteReport(id)
        .then(() =>
          alert("Report Deleted")
          
        )
        .catch(err => console.error(err))
    }
    console.log("error");

  }
  return (
    <div className='table_details'>
      <ProfileDetails/>
      <table className='table'>
        <tr className='tr'>
          <th className='tr'>User ID</th>
          <th className='tr'>Post ID</th>
          <th className='tr'>Post user ID</th>
          <th className='tr'>text</th>
          <th className='tr'>Delete Report</th>
          <th className='tr'>Delete Post</th>
        </tr>
        {
          props.array.map((item, i) =>
            <tr  className='tr' key={i}>
              <td  className='tr'>{item.userId}</td>
              <td  className='tr'>{item.postId}</td>
              <td  className='tr'>{item.postUserId}</td>
              <td  className='tr'>{item.text}</td>
              <td  className='tr' onClick={() => DeleteReportFromTable(item._id)}>{<FaRegTrashAlt />}</td>
              <td  className='tr' onClick={() =>
                DeletePostFromTable({
                  sendUserId: "admin id", //! USER._id
                  postId: item.postId,
                  receiverUserId: item.postUserId,
                  type: "deleted"
                },item.postId)
              }>{<FaRegTrashAlt />}</td>
            </tr>
          )
        }
      </table>
    </div>
  );
}
export default AdminTable;