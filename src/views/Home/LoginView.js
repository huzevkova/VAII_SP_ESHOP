import React from 'react';
import "./home-style.css";
import MyNavbar from '../../components/General/MyNavbar.js';
import FooterView from '../General/FooterView.js';
import {FaUserCircle} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const LoginView = ({loginState, handleInputChange, handleLogin}) => {

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
                                <input type="text" name="email" className={`form-control ${loginState.email}`} id="floatingInput"
                                       placeholder="Meno" onChange={handleInputChange}/>
                                <label htmlFor="floatingInput">Email, ktorým ste sa registrovali</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="password" name="password" className={`form-control ${loginState.password}`} id="floatingPassword"
                                       placeholder="Heslo" onChange={handleInputChange}/>
                                <label htmlFor="floatingPassword">Heslo</label>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 mb-3" onClick={handleLogin}>Prihlás ma</button>

                            <p className="text-muted clickable-component" onClick={()=> navigate('/registration')}>Ešte nemáte účet? Vytvorte si ho TU.</p>
                        </form>
                    </div>
                </div>
            </div>
            <FooterView/>
        </>
    )
}

export default LoginView;