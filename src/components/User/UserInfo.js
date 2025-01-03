import React, {useEffect, useState} from 'react';
import {fetchUserById} from "../../api/userApi";
import {useAuth} from "../../AuthProvider";
import {useNavigate} from "react-router-dom";
import MyNavbar from "../General/MyNavbar";
import Footer from "../General/Footer";
import Sidebar from "../General/Sidebar";
import UserInfoView from "../../views/User/UserInfoView";

const UserInfo = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const {user} = useAuth();

    if (!user) {
        navigate('/login');
    }

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const response = await fetchUserById(user);
                setUserData(response);
            } catch (err) {
                console.error(err);
                setUserData([]);
            }
        };

        loadUserData();
    });

    if (userData == null) {
        return;
    }

    return (
        <>
            <UserInfoView userData={userData} />
        </>
    )
}
export default UserInfo;