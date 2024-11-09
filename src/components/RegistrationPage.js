import React from 'react';
import MyNavbar from './MyNavbar.js';
import Footer from './Footer.js';
import {Button, Form} from "react-bootstrap";

class RegistrationPage extends React.Component {
    render() {
        return (
            <>
                <MyNavbar/>
                <div className="container mt-5 col-md-6 text-center">
                    <div className="row justify-content-center">
                        <h3 className="mb-3">Registračný formulár:</h3>
                        <Form>
                            <p>Povinné údaje:</p>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="name" placeholder="Meno"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="surname" placeholder="Priezvisko"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Email"/>
                            </Form.Group>
                            <p>Nepovinné údaje (automatické vyplnenie pri objednávke):</p>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="phone" placeholder="Tel. číslo"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="city" placeholder="Mesto"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="psc" placeholder="PSČ"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="street" placeholder="Ulica"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="house" placeholder="Číslo domu"/>
                            </Form.Group>

                            <div className="row justify-content-center">
                                <div className="col-5">
                                    <Form.Check className="mt-3" type="checkbox" id="agreement"
                                                label="Súhlasím so spracovaním osobných údajov."/>
                                </div>
                                <div className="col-4">
                                    <Form.Check className="mt-3" type="checkbox" id="newsletter"
                                                label="Súhlasím s odberom noviniek."/>
                                </div>
                            </div>

                            <Button className="mt-3 mb-3">Vytvor konto</Button>
                        </Form>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default RegistrationPage;