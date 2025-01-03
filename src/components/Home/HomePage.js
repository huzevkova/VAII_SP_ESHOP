import React from 'react';
import MyNavbar from '../General/MyNavbar.js';
import Sidebar from '../General/Sidebar.js';
import FooterView from '../../views/General/FooterView.js';
import HeroSectionView from '../../views/Home/HeroSectionView';
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
                        <HeroSectionView/>
                        <BookCatalogue/>
                    </div>
                </div>
            </div>
            <FooterView/>
        </>
    )
};

export default HomePage;