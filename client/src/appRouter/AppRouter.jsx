import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Footer from "../components/parts/footer/footer";
import NavBar from "../components/parts/navbar/navbar";
import Landing from "../components/pages/landing/landing";
import Profile from "../components/pages/profile/profile";

import Home from "../components/pages/home/home";
const Router=()=>{
    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path={"/"} element={<Landing/>}></Route>
            <Route path={"/profile"} element={<Profile/>}></Route>
            {/* <Route path={"/sculpture"} element={<Sculpture/>}></Route>
            <Route path={"/photography"} element={<Photography/>}></Route> */}
            <Route path={"/main"} element={<Home/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Router;