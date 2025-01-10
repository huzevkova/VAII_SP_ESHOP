import React, {useEffect, useState} from 'react';
import {fetchUserById} from "../../api/userApi";
import {useAuth} from "../../AuthProvider";
import UserInfoView from "../../views/User/UserInfoView";

const UserInfo = () => {

    const [userData, setUserData] = useState(null);
    const {user, token} = useAuth();

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