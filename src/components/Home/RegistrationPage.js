import React, {useState} from 'react';
import RegistrationView from '../../views/Home/RegistrationView';
import {createUser} from "../../api/userApi";
import {useNavigate} from "react-router-dom";

const RegistrationPage = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(
        { name: null,
            surname: null,
            email: null,
            phone_number: null,
            city: null,
            city_code: null,
            street: null,
            house_number: null,
            password: null });

    const [formAgreement, setFormAgreement] = useState(false);

    const [formState, setFormState] = useState(
        {name: 'normal',
            surname: 'normal',
            email: 'normal',
            password: 'normal',
            agreement: 'normal'});

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setFormState({...formState, [e.target.name]: 'normal'});
    };

    const handleCheckChange = (e) => {
        setFormAgreement(!formAgreement);
        setFormState({...formState, agreement: 'normal'});
    }

    const handleRegistration = async (e) => {
        e.preventDefault();
        let updatedFormData = {...formData};

        if (formData.name != null) {
            const fullName = formData.name + " " + formData.surname;
            updatedFormData.name = fullName;
        }

        if (!updatedFormData.name) {
            setFormState({...formState, name: 'wrong'});
            return;
        } else if (!formData.surname) {
            setFormState({...formState, surname: 'wrong'});
            return;
        } else if (!formData.email) {
            setFormState({...formState, email: 'wrong'});
            return;
        } else if (!formData.password || formData.password.length < 10) {
            setFormState({...formState, password: 'wrong'});
            return;
        } else if (!formAgreement) {
            setFormState({...formState, agreement: 'wrong'});
            return;
        }

        setFormData(updatedFormData);

        const {userId, message} = await createUser(updatedFormData);

        navigate('/login');
    };


    return (
        <RegistrationView
            formState={formState}
            handleInputChange={handleInputChange}
            handleCheckChange={handleCheckChange}
            handleRegistration={handleRegistration}
        />
    )
};

export default RegistrationPage;