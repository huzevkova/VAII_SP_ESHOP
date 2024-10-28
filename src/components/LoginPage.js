import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import { FaUserCircle } from "react-icons/fa";

class LoginPage extends React.Component {
    render() {
        return (
            <>
                <Navbar/>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center">
                            <h2 className="mb-4 login-h2">Prihláste sa do kníhkupectva BB a získajte výhody!</h2>

                            <div className="mb-4">
                                <FaUserCircle className="fa-7x" size={150}/>
                            </div>

                            <form>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Meno"/>
                                    <label htmlFor="floatingInput">Používateľské meno alebo email</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword"
                                           placeholder="Heslo"/>
                                    <label htmlFor="floatingPassword">Heslo</label>
                                </div>

                                <button type="submit" className="btn btn-primary w-100 mb-3">Prihlás ma</button>

                                <p className="text-muted"><a href="#">Ešte nemáte účet? Vytvorte si ho TU.</a></p>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default LoginPage;