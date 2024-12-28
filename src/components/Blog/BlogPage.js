import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import BlogView from "../../views/Blog/BlogView";

const BlogPage = () => {

    const navigate = useNavigate();

    const [posts, setPosts] = useState([
        {image: '/images/blog_img.jpg',
            title: 'Nadpis článku',
            subtitle: 'Podnadpis článku',
            author: 'Autor článku',
            description: 'Ukážka textu článku.'},
        {image: '/images/blog_img.jpg',
            title: 'Nadpis článku',
            subtitle: 'Podnadpis článku',
            author: 'Autor článku',
            description: 'Ukážka textu článku.'},
        {image: '/images/blog_img.jpg',
            title: 'Nadpis článku',
            subtitle: 'Podnadpis článku',
            author: 'Autor článku',
            description: 'Ukážka textu článku.'},
        {image: '/images/blog_img.jpg',
            title: 'Nadpis článku',
            subtitle: 'Podnadpis článku',
            author: 'Autor článku',
            description: 'Ukážka textu článku.'},
    ]);

    const openBlog = (index) => {
        navigate('/post', { state: { post: posts[index] } });
    }

    return (
        <BlogView
            posts={posts}
            openBlog={openBlog}
        />
    )
};

export default BlogPage;