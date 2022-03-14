import {useContext} from "react"
import {UserContext} from "../../../context/userContext/userContext"
function Logout(){
    const {  user,setUser}=useContext(UserContext)
function HandleLogout(){
    setUser({})
    localStorage.removeItem("token")
}
return (<button onClick={HandleLogout}>logout</button>)

}
export default Logout;