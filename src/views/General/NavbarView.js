import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import SearchBar from "../../components/General/SearchBar";
import {FaShoppingCart} from "react-icons/fa";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../AuthProvider";

const NavbarView = ({ user, handleSearchInputChange, handleSearch, handleDropdownClick}) => {

    const navigate = useNavigate();
    const auth = useAuth();

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
                            <NavDropdown.Item name="Fantasy" onClick={handleDropdownClick}>Fantasy</NavDropdown.Item>
                            <NavDropdown.Item name="Detektivka" onClick={handleDropdownClick}>Detektívka</NavDropdown.Item>
                            <NavDropdown.Item name="Romantika" onClick={handleDropdownClick}>Romantika</NavDropdown.Item>
                            <NavDropdown.Item name="Sci-fi" onClick={handleDropdownClick}>Sci-fi</NavDropdown.Item>
                            <NavDropdown.Item name="all" onClick={handleDropdownClick}>Iné...</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Item className={`p-2 ${user == null ? '' : 'logged-in'}`}>
                            {user == null ?
                                <Button variant="link" onClick={() => navigate('/login')} className="nav-link p-2">
                                Prihlásiť
                            </Button> :
                                <Button variant="link" onClick={() => navigate('/user')} className="nav-link p-2">
                                    {user.name}
                                </Button> }
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link onClick={() => navigate('/cart')}>
                                <FaShoppingCart size={35} />
                            </Nav.Link>
                        </Nav.Item>

                        {user == null ? <></> :
                        <Nav.Item className="p-2">
                            <Button variant="link" onClick={auth.logOut} className="nav-link p-2">
                                Odhlásiť
                            </Button>
                        </Nav.Item>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default NavbarView;