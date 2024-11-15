import React from "react";
import MyNavbar from "../General/MyNavbar";
import Footer from "../General/Footer";
import HeroSection from "../Home/HeroSection";
import BlogCard from "./BlogCard";

class BlogPage extends React.Component {

    render() {
        return (
            <>
                <MyNavbar/>
                <div className="container">
                        <HeroSection/>
                    <div className="row">
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                    </div>

                </div>
                <Footer/>
            </>
        )
    }
}

export default BlogPage;