import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CheckoutInfoView from "./CheckoutInfoView";
import CheckoutDeliveryView from "./CheckoutDeliveryView";
import CheckoutSummaryView from "./CheckoutSummaryView";
import "./cart-style.css";

const CheckoutView = ({currentStep, userData, orderData, orderOptions, payment, delivery, cart, handleInputChange, handlePrevious, handleOrder, handleNext, buttonDisable, extra }) => {

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
                <Col>
                    {currentStep === 1 ? <CheckoutInfoView userData={userData} handleInputChange={handleInputChange}/>
                        : currentStep === 2 ? <CheckoutDeliveryView orderOptions={orderOptions} payment={payment} delivery={delivery} handleInputChange={handleInputChange}/>
                            : <CheckoutSummaryView orderData={orderData} userData={userData} orderOptions={orderOptions} cart={cart} extra={extra}/>}
                </Col>
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
                        disabled={buttonDisable}
                        onClick={currentStep === 3 ? handleOrder : handleNext}
                    >
                        {currentStep === 3 ? "Kúpiť" : "Ďalej"}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default CheckoutView;