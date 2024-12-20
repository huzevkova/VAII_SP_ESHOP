import React from 'react';
import MyNavbar from '../General/MyNavbar.js';
import Sidebar from '../General/Sidebar.js';
import Footer from '../General/Footer.js';
import HeroSection from './HeroSection';
import BookCatalogue from '../Book/BookCatalogue';


const HomePage = () => {
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
                        <BookCatalogue/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default HomePage;