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
const Router=()=>{
    const { displayAlerts } = useContext(UserContext);
    return(
        <BrowserRouter>
        <NavBar/>       
        {
            displayAlerts?
            <AlertsPopUp/>:
            <div></div>
        }
        <Routes>
            <Route path={"/"} element={<Landing/>}></Route>
            <Route path={"/profile"} element={<Profile/>}></Route>
            <Route path={"/admin"} element={<Admin/>}> </Route>
          
            <Route path={"/main"} element={<Home/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Router;