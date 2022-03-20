import './admin.css'
import * as React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { DeleteReport } from '../../../services/reportService';
import { CreateAlert } from '../../../services/alertService';
import { CreateArchive } from '../../../services/archivedPostService';
import { DeletePost } from '../../../services/postService';
import { GetPostById } from '../../../services/postService';
const AdminCard = (props) => {
  const CatchNewArchive = (id) => {
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
      CatchNewArchive(id) //! CATCH OBJECT BY ID, AND CREATE NEW OBJECT IN ARCHIVE COLLECTION
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
    <div>
      <table>
        <tr>
          <th>User ID</th>
          <th>Post ID</th>
          <th>postUserId</th>
          <th>text</th>
          <th>Delete Report</th>
          <th>Delete Post</th>
        </tr>
        {
          props.array.map((item, i) =>
            <tr key={i}>
              <td >{item.userId}</td>
              <td >{item.postId}</td>
              <td >{item.postUserId}</td>
              <td >{item.text}</td>
              <td onClick={() => DeleteReportFromTable(item._id)}>{<FaRegTrashAlt />}</td>
              <td onClick={() =>
                DeletePostFromTable({
                  sendUserId: "admin id",
                  postId: item.postId,
                  receiverUserId: item.userId,
                  type: "Your post is deleted"
                }, "622f3a537af30c2bdfcb75cd")
              }>{<FaRegTrashAlt />}</td>
            </tr>
          )
        }
      </table>
    </div>
  );
}
export default AdminCard;