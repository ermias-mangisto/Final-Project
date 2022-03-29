import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Footer from "../components/parts/footer/footer";
import NavBar from "../components/parts/navbar/navbar";
import Landing from "../components/pages/landing/landing";
import ProfileRoute from "../components/pages/profile/ProfileRoute";
import Admin from "../components/pages/admin/admin";
import Home from "../components/pages/home/home";
import AlertsPopUp from "../components/parts/alerts/alerts";
import React, { useContext } from "react";
import { UserContext } from "../context/userContext/userContext";
import ProtectedRoute from "./ProtectedRoute"
import { ModeContext } from "../context/modeContext/ModeContext";
import Modes from "../components/parts/mode/modes";
const Router=()=>{
    const { mode } = useContext(ModeContext);
    const { isLoggedIn,user,displayAlerts ,setDisplayAlerts} = useContext(UserContext);
    return(
        <BrowserRouter>
        <NavBar/>       
        {/* <Modes/> */}
        {displayAlerts?<AlertsPopUp/>:<div></div>}
        <div onClick={()=> setDisplayAlerts(false)} style={{background:mode.background,color:mode.color}}>
        <Routes>         
            <Route exact path="/" element={<Landing/>}></Route>

            <Route path="/profile/:id"  element={<ProtectedRoute isLoggedIn={isLoggedIn}><ProfileRoute/></ProtectedRoute>}></Route>
            {/* <Route path="/profile/:id"  element={<ProtectedRoute isLoggedIn={isLoggedIn}>{ user.isAdmin==true? <Admin/> : user.isAdmin==false?<Profile/>:null}</ProtectedRoute>}></Route> */}
            <Route path="/main" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Home/></ProtectedRoute>}></Route>
        </Routes>            
        </div>
        <Footer/>
        </BrowserRouter>
    )
}

export default Router;