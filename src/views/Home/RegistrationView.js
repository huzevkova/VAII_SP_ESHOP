import React from 'react';
import MyNavbar from '../../components/General/MyNavbar.js';
import Footer from '../../components/General/Footer.js';
import {Button, Form} from "react-bootstrap";

const RegistrationView = ({formState, handleInputChange, handleCheckChange, handleRegistration}) => {
    return (
        <>
            <MyNavbar/>
            <div className="container mt-5 col-md-6 text-center">
                <div className="row justify-content-center">
                    <h3 className="mb-3">Registračný formulár:</h3>
                    <Form>
                        <p>Povinné údaje:</p>
                        <Form.Group className="mb-3" controlId="form.name">
                            <Form.Control className={formState.name} name="name" placeholder="Meno" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.surname">
                            <Form.Control className={formState.surname} name="surname" placeholder="Priezvisko" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.email">
                            <Form.Control className={formState.email} name="email" placeholder="Email" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.password">
                            <Form.Control className={formState.password} name="password" type="password" placeholder="Heslo (aspoň 10 znakov)" onChange={handleInputChange}/>
                        </Form.Group>
                        <p>Nepovinné údaje (automatické vyplnenie pri objednávke):</p>
                        <Form.Group className="mb-3" controlId="form.phone">
                            <Form.Control name="phone_number" placeholder="Tel. číslo" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.city">
                            <Form.Control name="city" placeholder="Mesto" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.city_code">
                            <Form.Control name="city_code" placeholder="PSČ" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.street">
                            <Form.Control name="street" placeholder="Ulica" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.house">
                            <Form.Control name="house_number" placeholder="Číslo domu" onChange={handleInputChange}/>
                        </Form.Group>

                        <div className="row justify-content-center">
                            <div className="col-5">
                                <Form.Check className={`mt-3 ${formState.agreement}`} type="checkbox" id="agreement"
                                            label="Súhlasím so spracovaním osobných údajov."
                                            onChange={handleCheckChange}/>
                            </div>
                        </div>

                        <Button className="mt-3 mb-3" onClick={handleRegistration}>Vytvor konto</Button>
                    </Form>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default RegistrationView;