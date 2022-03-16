import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Footer from "../components/parts/footer/footer";
import NavBar from "../components/parts/navbar/navbar";
import Landing from "../components/pages/landing/landing";
const Router=()=>{
    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path={"/"} element={<Landing/>}></Route>
            {/* <Route path={"/painting"} element={<Painting/>}></Route>
            <Route path={"/sculpture"} element={<Sculpture/>}></Route>
            <Route path={"/photography"} element={<Photography/>}></Route> */}
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Router;