import React from 'react';
import MyNavbar from "../../components/General/MyNavbar";
import Sidebar from "../../components/General/Sidebar";
import FooterView from '../../views/General/FooterView.js';
import HeroSectionView from '../../views/Home/HeroSectionView';
import BookCatalogue from "../../components/Book/BookCatalogue";

const HomePageView = () => {
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

export default HomePageView;