import react from "react";
import PostsBody from "./postsBody";
import SearchBar from "./searchBar";
import Requests from "./requests";
import "./home.css";
import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext/userContext";
const Home = () => {
    const {isLoggedIn}=useContext(UserContext)
    return (
<section className="page-body">
       <SearchBar/>
       <Requests/>
        <PostsBody/>
        </section>
    )
}
export default Home;