import React from 'react';
import {useNavigate} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Button, Dropdown } from 'react-bootstrap';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import SearchBar from "./SearchBar";

const MyNavbar = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    const goToHome = () => {
        navigate('/');
    }

    return (
        <Navbar bg="light" expand="lg" className="navbar-light">
            <Container>
                <Navbar.Brand>
                    <img
                        className="brand-img"
                        src="/images/bb_books.png"
                        alt="shop brand"
                        style={{ height: '50px' }}
                    />
                </Navbar.Brand>

                <Navbar.Brand onClick={goToHome} className="clickable-component">
                    BB E-shop
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarNav" />

                <Navbar.Collapse id="navbarNav">

                    <div className="flex-grow-1 d-flex justify-content-center align-items-center w-50">
                        <SearchBar />
                    </div>

                    <Nav className="ms-auto">
                        <NavDropdown className="p-2" title="Nakupovať" id="navbardrop" size="sm">
                            <NavDropdown.Item href="#/action-1">Fantasy & Sci-fi</NavDropdown.Item>
                            <NavDropdown.Item href="#/action-2">Biografie</NavDropdown.Item>
                            <NavDropdown.Item href="#/action-3">Romantika</NavDropdown.Item>
                            <NavDropdown.Item href="#/action-4">Učebnice</NavDropdown.Item>
                            <NavDropdown.Item href="#/action-5">Iné...</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Item className="p-2">
                            <Button variant="link" onClick={goToLogin} className="nav-link p-2">
                                Prihlásiť
                            </Button>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="#cart">
                                <FaShoppingCart size={35} />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default MyNavbar;