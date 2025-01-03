import React, {useState} from 'react';
import LoginView from "../../views/Home/LoginView";
import {useAuth} from "../../AuthProvider";

const LoginPage = () => {

    const auth = useAuth();

    const [error, setError] = useState(null);

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
                await auth.loginAction(loginData);
            } catch (err) {
                setError(err.message);
            }
        }
    }

    return (
        <LoginView
            loginState={loginState}
            handleInputChange={handleInputChange}
            handleLogin={handleLogin}
            error={error}
        />
    )
}

export default LoginPage;