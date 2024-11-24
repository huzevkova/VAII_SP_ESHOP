import React, {useState} from 'react';
import RegistrationView from '../../views/RegistrationView';

const RegistrationPage = () => {

    const [formData, setFormData] = useState(
        { name: null,
            surname: null,
            email: null,
            phone: null,
            city: null,
            city_code: null,
            street: null,
            house: null,
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

    const handleRegistration = (e) => {
        e.preventDefault();
        if (formData.name == null) {
            setFormState({...formState, name: 'wrong'});
        } else if (formData.surname == null) {
            setFormState({...formState, surname: 'wrong'});
        } else if (formData.email == null) {
            setFormState({...formState, email: 'wrong'})
        } else if (formData.password == null || formData.password.length < 10) {
            setFormState({...formState, password: 'wrong'});
        } else if (!formAgreement) {
            setFormState({...formState, agreement: 'wrong'});
        }
        console.log(formData);
    }

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