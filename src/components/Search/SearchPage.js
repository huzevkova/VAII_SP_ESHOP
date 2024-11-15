import React from 'react';
import MyNavbar from '../General/MyNavbar';
import Footer from "../General/Footer";
import SearchFilter from "./SearchFilter";
import SearchBar from "../General/SearchBar";
import ResultList from "./ResultList";

class SearchPage extends React.Component {

    render() {
        return (
            <>
                <MyNavbar/>

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