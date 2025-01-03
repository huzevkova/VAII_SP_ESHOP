import React from "react";
import "./blog-style.css";
import MyNavbar from "../../components/General/MyNavbar";
import Sidebar from "../../components/General/Sidebar";
import HeroSectionView from "../Home/HeroSectionView";
import FooterView from "../General/FooterView";
import ResultCardView from "../Search/ResultCardView";

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
                        <HeroSectionView/>
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
                            {bookData == null ? <p/> : <ResultCardView bookData={bookData} goToBookDetail={goToBook}/>}
                        </div>
                    </div>
                </div>
            </div>
            <FooterView/>
        </>
    )
}

export default BlogPostView;