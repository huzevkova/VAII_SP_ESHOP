import React from "react";
import {useLocation} from "react-router-dom";
import BlogPostView from "../../views/Blog/BlogPostView";

const BlogPost = () => {

    const location = useLocation();
    const { post } = location.state;

    if (post) {
        console.log(post.body);
    }

    return (
        <>
           <BlogPostView post={post} bookData={null} goToBook={null}/>
        </>
    )
}

export default BlogPost;