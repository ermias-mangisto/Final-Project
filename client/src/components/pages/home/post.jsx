import {useState,useEffect,useContext}  from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {GetUserById} from '../../../services/userService'
import PostPopUp from './postPopUp';
import { MdGroups } from "react-icons/md";
import { MdReportProblem } from "react-icons/md";
import {UserContext} from '../../../context/userContext/userContext'
import {CreateAlert} from '../../../services/alertService'
import ReportPopUp from "./reportPopUp";
import {Link} from "react-router-dom"
import { ModeContext } from '../../../context/modeContext/ModeContext';
const Post = (props) => {
  const {user,setUser}=useContext(UserContext);
    const [userName,setUserName]=useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [reportPopUp, setReportPopUp] = useState(false);
    const [joinAlert, setJoinAlert] = useState({
      sendUserId: user._id,
      postId:props.postInfo._id,
      receiverUserId:props.postInfo.userId,
      type:"join"
    });


    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    const toggleReportPopup = () => {
      setReportPopUp(!reportPopUp);
    }
useEffect(()=>{
   const getUserName =async(id)=>{
  const user = await GetUserById(id);
  setUserName({name:`${user.firstName} ${user.lastName}`,short:`${user.firstName[0].toUpperCase()+user.lastName[0].toUpperCase()}`});
    }  
    getUserName(props.postInfo.userId);
},[])
const MakeAlert= ()=>{
   CreateAlert(joinAlert)
   .then((res)=>{alert("request sent");});
  
    }


  return (
      <>
    {isOpen && <PostPopUp
    postInfo={props.postInfo}
        name={userName.name}
        postId={props.postInfo._id}
        handleClose={togglePopup}
      />} 
      {reportPopUp && <ReportPopUp  handleClose={toggleReportPopup} postInfo={props.postInfo}/>}
    <Card className="Card" sx={{ maxWidth: "90%" ,marginTop:"15px" ,marginLeft:"auto" ,marginRight:"auto" }} >
      <CardHeader
      sx={{cursor:"pointer"}}
      onClick={togglePopup}
        avatar={
          <Avatar sx={{ bgcolor: red[500]}} aria-label="recipe">
           <Link  className="avatar" to={`/profile/${props.postInfo.userId}`}>{userName.short}</Link> 
          </Avatar>
        }
        title={`${props.postInfo.postName}-${props.postInfo.projectType}`}
        subheader={props.postInfo.createdAt}
      />
    
      <CardContent>
        <Typography variant="body2" color="text.secondary" maxHeight="90px" overflow="hidden">
      { props.postInfo.postText}
     Participants required: { props.postInfo.numberOfParticipants}
     Technologies Required: { props.postInfo.technologiesRequired}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="join" >
         <MdGroups onClick={MakeAlert}/>
        </IconButton>
        <IconButton aria-label="report">
        <MdReportProblem  onClick={toggleReportPopup}/>
        </IconButton>
      </CardActions>
    </Card>
    </>
  );
}
export default Post;