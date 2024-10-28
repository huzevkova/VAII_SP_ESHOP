import React from 'react';
import {useNavigate} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    const goToHome = () => {
        navigate('/');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand">
                    <img className="brand-img" src="/images/bb_books.png" alt="shop brand"/>
                </a>
                <a className="navbar-brand" onClick={goToHome}>BB E-shop</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="navbardrop" size="sm">
                                    Nakupovať
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Fantasy & Sci-fi</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Biografie</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Romantika</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Učebnice</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">Iné...</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className="nav-item p-2">
                            <button className="nav-link" onClick={goToLogin}>Prihlásiť</button>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><FaShoppingCart size={35}/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;