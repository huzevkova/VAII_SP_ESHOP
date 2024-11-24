import React, {useState} from 'react';
import LoginView from "../../views/LoginView";

const LoginPage = () => {

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