import React from "react";
import {useLocation} from "react-router-dom";
import BlogPostView from "../../views/BlogPostView";

const BlogPost = () => {

    const location = useLocation();
    const { post } = location.state;

    return (
        <>
           <BlogPostView post={post} bookData={null} goToBook={null}/>
        </>
    )
}

export default BlogPost;