import React from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";
import {FaSearch, FaShoppingCart} from "react-icons/fa";
import Accordion from 'react-bootstrap/Accordion'
import SearchFilter from "./SearchFilter";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";

class SearchPage extends React.Component {

    render() {
        return (
            <>
                <Navbar/>

                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-3">
                            <SearchFilter/>
                        </div>

                        <div className="col-md-9 py-2">
                            <SearchBar/>
                            <ResultList/>
                        </div>
                    </div>
                </div>

                <Footer/>
            </>
        )
    }
}

export default SearchPage;