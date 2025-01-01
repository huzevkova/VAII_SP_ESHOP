import React from "react";
import MyNavbar from "../../components/General/MyNavbar";
import Sidebar from "../../components/General/Sidebar";
import HeroSection from "../../components/Home/HeroSection";
import Footer from "../../components/General/Footer";
import ResultCard from "../../components/Search/ResultCard";

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
                        <div className="container-fluid mt-5 blog-text">
                            <p>
                                {post.body}
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