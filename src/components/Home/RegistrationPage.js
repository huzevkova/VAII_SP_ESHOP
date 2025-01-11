import React, {useState} from 'react';
import RegistrationView from '../../views/Home/RegistrationView';
import {createUser} from "../../api/userApi";
import {useNavigate} from "react-router-dom";

const RegistrationPage = () => {

    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState(
        { name: null,
            surname: null,
            email: null,
            phone_number: null,
            city: null,
            city_code: null,
            street: null,
            house_number: null,
            password: null,
            password_confirmation: null,});

    const [formAgreement, setFormAgreement] = useState(false);

    const [formState, setFormState] = useState(
        {name: 'normal',
            surname: 'normal',
            email: 'normal',
            password: 'normal',
            password_confirmation: 'normal',
            agreement: 'normal'});

    /**
     * Spracovanie zmeny vo vstupných poliach formuláru.
     * @param e
     */
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setFormState({...formState, [e.target.name]: 'normal'});
    };

    /**
     * Spracovanie zakliknutia súhlasu so spracovaním údajov.
     */
    const handleCheckChange = () => {
        setFormAgreement(!formAgreement);
        setFormState({...formState, agreement: 'normal'});
    }

    /**
     * Spracovanie registrácie (validácia) + informovanie o chybách.
     * @param e
     * @returns {Promise<void>}
     */
    const handleRegistration = async (e) => {
        e.preventDefault();
        let updatedFormData = {...formData};

        if (formData.name != null) {
            updatedFormData.name = formData.name + " " + formData.surname;
        }

        if (!updatedFormData.name) {
            setFormState({...formState, name: 'wrong'});
            return;
        } else if (!formData.surname) {
            setFormState({...formState, surname: 'wrong'});
            return;
        } else if (!formData.email || !formData.email.includes("@")) {
            setFormState({...formState, email: 'wrong'});
            setError("Zlá forma emailu.");
            return;
        } else if (!formData.password || formData.password.length < 10) {
            setFormState({...formState, password: 'wrong'});
            return;
        } else if (!formData.password_confirmation || formData.password_confirmation !== formData.password) {
            setFormState( {...formState, password_confirmation: 'wrong'});
            return;
        } else if (!formAgreement) {
            setFormState({...formState, agreement: 'wrong'});
            return;
        }

        setFormData(updatedFormData);

        try {
            await createUser(updatedFormData);
            navigate('/login');
        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    };


    return (
        <RegistrationView
            formState={formState}
            handleInputChange={handleInputChange}
            handleCheckChange={handleCheckChange}
            handleRegistration={handleRegistration}
            error={error}
        />
    )
};

export default RegistrationPage;