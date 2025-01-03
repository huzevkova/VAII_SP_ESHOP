import MyNavbar from "../../components/General/MyNavbar";
import HeroSectionView from "../../components/Home/HeroSectionView";
import BlogCard from "../../components/Blog/BlogCard";
import Footer from "../../components/General/Footer";
import React from "react";

const BlogView = ({posts, openBlog}) => {
    return (
        <>
            <MyNavbar/>
            <div className="container">
                <HeroSectionView/>
                <div className="row">
                    {posts.map((post, index) => (
                        <BlogCard key={index}
                                  index={index}
                                  image={post.image}
                                  title={post.title}
                                  subtitle={post.subtitle}
                                  description={post.description}
                                  openBlog={openBlog}/>
                    ))}
                </div>

            </div>
            <Footer/>
        </>
    )
};

export default BlogView;