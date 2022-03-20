import react from "react";
import {PostProvider }from "../../../context/postContext/PostContext"
import Posts from "./posts";
import "./home.css"
const PostsBody = () => {
    return (
    <section className="posts">
        <PostProvider>
        <Posts/>
        </PostProvider>
        </section>
    )
}
export default PostsBody;