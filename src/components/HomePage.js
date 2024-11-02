import React from 'react';
import MyNavbar from './MyNavbar.js';
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';
import HeroSection from './HeroSection';
import BookCatalogue from './BookCatalogue';


class HomePage extends React.Component {
    render() {
        return (
            <>
                <MyNavbar/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-md-3" id="sidebar">
                            <Sidebar/>
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <HeroSection/>
                            <BookCatalogue/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default HomePage;