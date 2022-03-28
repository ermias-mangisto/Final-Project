import react from "react";
import PostsBody from "./postsBody";
import SearchBar from "./searchBar";
import Requests from "./requests";
import CheckAlert from "../../parts/alerts/checkAlert";
import "./home.css"
const Home = () => {
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