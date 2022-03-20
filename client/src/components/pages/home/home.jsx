import react from "react";
import PostsBody from "./postsBody";
import SearchBar from "./searchBar";
import Requests from "./requests";
import "./home.css"
const Home = () => {
    return (
<section className="page-body">
       <SearchBar/>
       <Requests/>
        <PostsBody/>
        </section>
    )
}
export default Home;