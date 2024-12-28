import React, {useState} from 'react';
import LoginView from "../../views/Home/LoginView";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../AuthProvider";

const LoginPage = () => {

    const navigate = useNavigate();
    const auth = useAuth();

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

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginData.email == null) {
            setLoginState({...loginState, email: 'wrong'})
        } else if (loginData.password == null) {
            setLoginState({...loginState, password: 'wrong'})
        } else {
            try {
                //const response = await checkUserCredentials(loginData);
                auth.loginAction(loginData);
            } catch (err) {
                setLoginState({...loginState, password: 'wrong'})
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