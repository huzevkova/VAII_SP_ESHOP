import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Checkout = () => {

    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        street: "",
        house: "",
        city: "",
        postal_code: "",
        delivery_option: "",
        payment_option: "",
        books: ["Book 1", "Book 2"], // Example books
        total: 39.99,
    });

    const isStep1Valid =
        formData.name &&
        formData.email &&
        formData.phone &&
        formData.street &&
        formData.house &&
        formData.city &&
        formData.postal_code;

    const isStep2Valid =
        formData.delivery_option && formData.payment_option;

    const handleNext = () => {
        if (currentStep === 1 && isStep1Valid) {
            setCurrentStep(2);
        } else if (currentStep === 2 && isStep2Valid) {
            setCurrentStep(3);
        }
    };

    const handlePrevious = () => {
        if (currentStep === 2) {
            setCurrentStep(1);
        } else if (currentStep === 3) {
            setCurrentStep(2);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleOrder = () => {
        navigate('/order_done')
    }

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Meno</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Zadajte svoje meno"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Priezvisko</Form.Label>
                            <Form.Control
                                type="text"
                                name="surname"
                                placeholder="Zadajte svoje priezvisko"
                                value={formData.surname}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Zadajte svoj email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Telefónne číslo</Form.Label>
                            <Form.Control
                                type="phone"
                                name="phone"
                                placeholder="Zadajte svoje telefónne číslo"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Ulica</Form.Label>
                            <Form.Control
                                type="text"
                                name="street"
                                placeholder="Zadajte ulicu"
                                value={formData.street}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Číslo domu</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="house"
                                        placeholder="Zadajte číslo domu"
                                        value={formData.house}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>PSČ</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="postal_code"
                                        placeholder="Zadajte PSČ"
                                        value={formData.postal_code}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Mesto</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                placeholder="Zadajte mesto"
                                value={formData.city}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                );
            case 2:
                return (
                    <>
                        <h3>Choose Delivery</h3>
                        <Form>
                            <div className="mb-3">
                                <Form.Check
                                    type="radio"
                                    id="delivery-SPS"
                                    label="Doručenie na adresu - Slovenská pošta (+2,99€)"
                                    name="delivery_option"
                                    value="Doručenie na adresu - Slovenská pošta"
                                    checked={formData.delivery_option === "Doručenie na adresu - Slovenská pošta"}
                                    onChange={handleInputChange}
                                />
                                <Form.Check
                                    type="radio"
                                    id="delivery-packeta"
                                    label="Doručenie na adresu - Packeta (+2,99€)"
                                    name="delivery_option"
                                    value="Doručenie na adresu - Packeta"
                                    checked={formData.delivery_option === "Doručenie na adresu - Packeta"}
                                    onChange={handleInputChange}
                                />
                                <Form.Check
                                    type="radio"
                                    id="delivery-GLS"
                                    label="Doručenie na adresu - GLS (+2,99€)"
                                    name="delivery_option"
                                    value="Doručenie na adresu - GLS"
                                    checked={formData.delivery_option === "Doručenie na adresu - GLS"}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </Form>
                        <h3>Výber platby</h3>
                        <Form>
                            <div className="mb-3">
                                <Form.Check
                                    type="radio"
                                    id="credit-card"
                                    label="Platba prevodom"
                                    name="payment_option"
                                    value="Platba prevodom"
                                    checked={formData.payment_option === "Platba prevodom"}
                                    onChange={handleInputChange}
                                />
                                <Form.Check
                                    type="radio"
                                    id="cash-on-delivery"
                                    label="Dobierka (+1,00€)"
                                    name="payment_option"
                                    value="Dobierka"
                                    checked={formData.payment_option === "Dobierka"}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </Form>
                    </>
                );
            case 3:
                return (
                    <Alert variant="success">
                        <h4>Zhrnutie</h4>
                        <p><strong>Meno a priezvisko:</strong> {formData.name + " " + formData.surname}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p>
                            <strong>Adresa:</strong> {`${formData.street} ${formData.house}, ${formData.postal_code} ${formData.city}`}
                        </p>
                        <p><strong>Doručenie:</strong> {formData.delivery_option}</p>
                        <p><strong>Platba:</strong> {formData.payment_option}</p>
                        <p><strong>Objednávka:</strong> {formData.books.join(", ")}</p>
                        <p><strong>Cena:</strong> ${formData.total.toFixed(2)}</p>
                    </Alert>
                );
            default:
                return null;
        }
    };

    return (
        <Container fluid="md">
            <Row className="out-progress">
                <Col className={`arrow ${currentStep === 1 ? "active" : ""}`} md={4}>
                    1
                </Col>
                <Col className={`arrow ${currentStep === 2 ? "active" : ""}`} md={4}>
                    2
                </Col>
                <Col className={`arrow ${currentStep === 3 ? "active" : ""}`} md={4}>
                    3
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>{renderStep()}</Col>
            </Row>
            <Row className="mt-4">
                <Col className="text-center">
                    <Button className="mr-5"
                            disabled={
                                (currentStep === 1)
                            }
                            onClick={handlePrevious}
                    >
                        Späť
                    </Button>
                </Col>
                <Col className="text-center">
                    <Button
                        disabled={
                            (currentStep === 1 && !isStep1Valid) ||
                            (currentStep === 2 && !isStep2Valid)
                        }
                        onClick={currentStep === 3 ? handleOrder : handleNext}
                    >
                        {currentStep === 3 ? "Kúpiť" : "Ďalej"}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Checkout;