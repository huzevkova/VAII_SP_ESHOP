import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import SideBarView from "../../views/General/SideBarView";
import {fetchBlogPosts} from "../../api/bloggerApi";

const Sidebar = () => {

    const navigate = useNavigate();

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const loadBlogPosts = async () => {
            try {
                const response = await fetchBlogPosts();
                setPosts(response);
            } catch (err) {
                console.error(err);
                setPosts([]);
            }
        };

        loadBlogPosts();
    });

    if (posts == null) {
        return;
    }

    const goToBlogPost = (index) => {
        navigate('/post', { state: { post: posts[index] } });
    }

    return (
        <SideBarView
            posts={posts.slice(0, 6)}
            goToBlogPost={goToBlogPost}
        />
    )
};

export default Sidebar;