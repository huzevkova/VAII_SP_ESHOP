import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import SearchBar from "../components/General/SearchBar";
import {FaShoppingCart} from "react-icons/fa";
import React from "react";
import {useNavigate} from "react-router-dom";

const NavbarView = ({ handleSearchInputChange, handleSearch, handleDropdownClick}) => {

    const navigate = useNavigate();

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

                <Navbar.Brand onClick={() => navigate('/')} className="clickable-component">
                    BB E-shop
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarNav"/>

                <Navbar.Collapse id="navbarNav">

                    <div className="flex-grow-1 d-flex justify-content-center align-items-center w-50">
                        <SearchBar handleSearch={handleSearch} handleSearchInputChange={handleSearchInputChange}/>
                    </div>

                    <Nav className="ms-auto">
                        <NavDropdown className="p-2" title="Nakupovať" id="navbardrop" size="sm">
                            <NavDropdown.Item name="fantasy" onClick={handleDropdownClick}>Fantasy</NavDropdown.Item>
                            <NavDropdown.Item name="detective" onClick={handleDropdownClick}>Detektívka</NavDropdown.Item>
                            <NavDropdown.Item name="romance" onClick={handleDropdownClick}>Romantika</NavDropdown.Item>
                            <NavDropdown.Item name="scifi" onClick={handleDropdownClick}>Sci-fi</NavDropdown.Item>
                            <NavDropdown.Item name="other" onClick={handleDropdownClick}>Iné...</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Item className="p-2">
                            <Button variant="link" onClick={() => navigate('/login')} className="nav-link p-2">
                                Prihlásiť
                            </Button>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link onClick={() => navigate('/cart')}>
                                <FaShoppingCart size={35} />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavbarView;