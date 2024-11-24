import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import CheckoutView from "../../views/CheckoutView";

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
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleOrder = () => {
        navigate('/order_done')
    }

    return (
        <CheckoutView
            currentStep={currentStep}
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            handleOrder={handleOrder}
            buttonDisable={(currentStep === 1 && !isStep1Valid) ||
                (currentStep === 2 && !isStep2Valid)}
        />
    );
}

export default Checkout;