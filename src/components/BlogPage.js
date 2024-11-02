import React from "react";
import MyNavbar from "./MyNavbar";
import Footer from "./Footer";
import { Button, Card } from 'react-bootstrap';
import HeroSection from "./HeroSection";
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