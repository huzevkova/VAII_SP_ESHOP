import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import SideBarView from "../../views/General/SideBarView";

const Sidebar = () => {

    const navigate = useNavigate();

    const [posts, setPosts] = useState([
        {title: '(Recenzia) Na čom v živote skutočne záleží?',
            subtitle: 'Víťaz je sám od Paula Coelha',
            author: 'Autor článku',},
        {title: 'Nadchádzajúce vydanie:',
            subtitle: 'Nová kniha od Brandona Sandersona už čoskoro!',
            author: 'Autor článku',}
    ]);

    const goToBlog = () => {
        navigate('/blog_posts');
    }

    const goToBlogPost = (index) => {
        navigate('/post', { state: { post: posts[index] } });
    }

    return (
        <SideBarView
            posts={posts}
            goToBlog={goToBlog}
            goToBlogPost={goToBlogPost}
        />
    )
};

export default Sidebar;