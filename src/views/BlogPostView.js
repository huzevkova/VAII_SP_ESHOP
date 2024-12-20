import React from "react";
import MyNavbar from "../components/General/MyNavbar";
import Sidebar from "../components/General/Sidebar";
import HeroSection from "../components/Home/HeroSection";
import Footer from "../components/General/Footer";
import ResultCard from "../components/Search/ResultCard";

const BlogPostView = ({post, bookData, goToBook}) => {
    return (
        <>
            <MyNavbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-3" id="sidebar">
                        <Sidebar/>
                    </div>
                    <div className="container col-lg-9 col-md-8">
                        <HeroSection/>
                        <div className="container-fluid mt-5 blog-start">
                            <h1>{post.title}</h1>
                            <h3>{post.subtitle}</h3>
                            <h5>{post.author}</h5>
                        </div>
                        <div className="container-fluid mt-5">
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum."
                            </p>
                        </div>
                        <div className="mt-5">
                            {bookData == null ? <p/> : <ResultCard bookData={bookData} goToBookDetail={goToBook}/>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default BlogPostView;