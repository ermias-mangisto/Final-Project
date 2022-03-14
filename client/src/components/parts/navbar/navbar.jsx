
import {useState} from "react"
import Register from "../../parts/register/register";
import Login from "../../parts/login/login";
function Try(){
const [login,setLogin]=useState(false);
const [register,setRegister]=useState(false);
const toggleLogin = () => {
    setLogin(!login);
  }
  const toggleRegister = () => {
    setRegister(!register);
  }
return(<div>
<button onClick={toggleLogin}>login</button>
<button onClick={toggleRegister}>register</button>
{login &&<Login   handleClose={toggleLogin}/>}
{register &&<Register handleClose={toggleRegister}/>}
</div>)
}
export default Try;