import React, {useState} from 'react';
import LoginView from "../../views/LoginView";
import {checkUserCredentials} from "../../api/userApi";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate();


    const [loginData, setLoginData] = useState(
        {email: null,
            password: null});

    const [loginState, setLoginState] = useState(
        {email: 'normal',
            password: 'normal'});

    const handleInputChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
        setLoginState({...loginState, [e.target.name]: 'normal'});
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if (loginData.email == null) {
            setLoginState({...loginState, email: 'wrong'})
        } else if (loginData.password == null) {
            setLoginState({...loginState, password: 'wrong'})
        } else {
            try {
                const response = await checkUserCredentials(loginData.email);
                if (response.type === 0) {
                    navigate('/');
                } else if (response.type === 1) {
                    navigate('/administration');
                }
            } catch (err) {
                console.error(err);
            }
        }
    }

    return (
        <LoginView
            loginState={loginState}
            handleInputChange={handleInputChange}
            handleLogin={handleLogin}
        />
    )
}

export default LoginPage;