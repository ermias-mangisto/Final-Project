import react from "react";
import PostsBody from "./postsBody";
import SearchBar from "./searchBar";
import Requests from "./requests";
import CheckAlert from "../../parts/alerts/checkAlert";
import "./home.css"

import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext/userContext";
import { AlertProvider } from "../../../context/alertContext/AlertContext";

const Home = () => {
    const { isLoggedIn } = useContext(UserContext)
    return (
        <section className="page-body">
            <CheckAlert />
            <SearchBar />
            <Requests />
            <PostsBody />

        </section>
    )
}
export default Home;