import {useState,useEffect}  from 'react';
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
import PostPopUp from './postPopUp'
const Post = (props) => {
    const [userName,setUserName]=useState("");
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
useEffect(()=>{
   const getUserName =async(id)=>{
  const user = await GetUserById(id);
  setUserName(user.firstName);
  console.log(user.firstName);
    }  
    getUserName(props.postInfo.userId);
},[])

  return (
      <>
    {isOpen && <PostPopUp
        content={
 <article className='PopUpCard' >
 <h1 className='nameTag'> posted by:{userName}on {props.postInfo.createdAt}</h1>
<div className='PopUpText'>
<h1>
 {`${props.postInfo.postName}-${props.postInfo.projectType}`}
      </h1>   
        <p>    { props.postInfo.postText}</p>
 <p>  Participants required: { props.postInfo.numberOfParticipants}</p>
 <p>  Technologies Required: { props.postInfo.technologiesRequired}</p>
       </div>
      </article>}
        name={userName}
        postId={props.postInfo._id}
        handleClose={togglePopup}
      />}
    <Card sx={{ maxWidth: 700 ,marginTop:10}} onClick={togglePopup}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {userName}
          </Avatar>
        }
        title={`${props.postInfo.postName}-${props.postInfo.projectType}`}
        subheader={props.postInfo.createdAt}
      />
    
      <CardContent>
        <Typography variant="body2" color="text.secondary">
      { props.postInfo.postText}
     Participants required: { props.postInfo.numberOfParticipants}
     Technologies Required: { props.postInfo.technologiesRequired}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </>
  );
}
export default Post;