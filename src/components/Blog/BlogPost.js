import React from "react";
import MyNavbar from "../General/MyNavbar";
import Sidebar from "../General/Sidebar";
import HeroSection from "../Home/HeroSection";
import Footer from "../General/Footer";
import ResultCard from "../Search/ResultCard";


class BlogPost extends React.Component {

    render() {
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
                                <h1>Názov článku</h1>
                                <h3>Podnadpis</h3>
                                <h5>Autor - dátum vydania</h5>
                            </div>
                            <div className="container-fluid mt-5">
                                <p>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </p>
                            </div>
                            <div className="mt-5">
                            <ResultCard/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default BlogPost;