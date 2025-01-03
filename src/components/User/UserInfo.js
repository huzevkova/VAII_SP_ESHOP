import React, {useEffect, useState} from 'react';
import {fetchUserById} from "../../api/userApi";
import {useAuth} from "../../AuthProvider";
import {useNavigate} from "react-router-dom";
import UserInfoView from "../../views/User/UserInfoView";

const UserInfo = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const {user, token} = useAuth();

    if (!user) {
        navigate('/login');
    }

    useEffect(() => {
        const loadUserData = async () => {
            try {
                if (user === "admin") {
                    const response = await fetchUserById(token.id_user);
                    setUserData(response);
                } else {
                    const response = await fetchUserById(user);
                    setUserData(response);
                }
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