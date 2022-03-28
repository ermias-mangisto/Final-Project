import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Footer from "../components/parts/footer/footer";
import NavBar from "../components/parts/navbar/navbar";
import Landing from "../components/pages/landing/landing";
import Profile from "../components/pages/profile/profile";
import Admin from "../components/pages/admin/admin";
import Home from "../components/pages/home/home";
import AlertsPopUp from "../components/parts/alerts/alerts";
import React, { useContext } from "react";
import { UserContext } from "../context/userContext/userContext";
import ProtectedRoute from "./ProtectedRoute"
const Router=()=>{
    const { isLoggedIn,user,displayAlerts ,setDisplayAlerts} = useContext(UserContext);
    return(
        <BrowserRouter>
        <NavBar/>       
        {
            displayAlerts?
            <AlertsPopUp/>:
            <div></div>
        }
        <div onClick={()=> setDisplayAlerts(false)}>
        <Routes>
          
            <Route exact path="/" element={<Landing/>}></Route>

            <Route path="/profile/:id"  element={<ProtectedRoute isLoggedIn={isLoggedIn}>{ user.isAdmin==true? <Admin/> : user.isAdmin==false?<Profile/>:null}</ProtectedRoute>}></Route>
            <Route path="/main" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Home/></ProtectedRoute>}></Route>

        </Routes>            
        </div>
        <Footer/>
        </BrowserRouter>
    )
}

export default Router;