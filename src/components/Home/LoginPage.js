import React from 'react';
import MyNavbar from '../General/MyNavbar.js';
import Footer from '../General/Footer.js';
import {FaUserCircle} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <MyNavbar/>
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

                            <p className="text-muted clickable-component" onClick={()=> navigate('/registration')}>Ešte nemáte účet? Vytvorte si ho TU.</p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default LoginPage;