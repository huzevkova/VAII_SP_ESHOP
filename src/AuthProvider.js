import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthContext = createContext();
const API_URL = 'http://localhost:5000/api/users';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            try {
                const parsedToken = JSON.parse(token);
                setUser(parsedToken.id_user);
                setToken(parsedToken);
            } catch (err) {
                console.error("Failed to parse token:", err);
                logOut();
            }
        }
    }, []);

    const loginAction = async (data) => {
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const res = await response.json();
            if (res.type === 0) {
                setUser(res.id_user);
                setToken(res);
                localStorage.setItem("site", res);
                navigate('/');
                return;
            } else if (res.type === 1) {
                navigate('/administration');
                return;
            }
            throw new Error(res.message);
        } catch (err) {
            console.error(err);
        }
    };

    const logOut = () => {
        console.log("logging out");
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};