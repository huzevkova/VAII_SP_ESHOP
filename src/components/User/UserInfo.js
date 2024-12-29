import React, {useEffect, useState} from 'react';
import {fetchUserById} from "../../api/userApi";
import {useAuth} from "../../AuthProvider";
import {useNavigate} from "react-router-dom";
import MyNavbar from "../General/MyNavbar";
import Footer from "../General/Footer";
import Sidebar from "../General/Sidebar";

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
            <MyNavbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-3" id="sidebar">
                        <Sidebar/>
                    </div>
                    <div className="container col-lg-9 col-md-8">
                        <h2 className="mt-3 text-center text-primary">OSOBNÉ ÚDAJE</h2>
                        <div className="card shadow-sm border-0 mt-4">
                            <div className="card-body">
                                <div className="flex-column flex-md-row align-items-md-center p-4">
                                    <div className="mb-4 mb-md-0 me-md-4 text-center text-md-start user-font">
                                        <h4 className="mb-1 text-dark fw-bold">{userData.name}</h4>
                                        <p className="text-muted mb-3">{userData.email}</p>

                                        <table className="table table-borderless">
                                            <tbody>
                                            <tr>
                                                <th className="fw-bold text-dark">Tel. číslo:</th>
                                                <td>{userData.phone_number}</td>
                                            </tr>
                                            <tr>
                                                <th className="fw-bold text-dark">Mesto:</th>
                                                <td>{userData.city_code + " " + userData.city}</td>
                                            </tr>
                                            <tr>
                                                <th className="fw-bold text-dark">Ulica:</th>
                                                <td>{userData.street + " " + userData.house_number}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="d-flex align-content-end gap-2 mt-3">
                                        <button
                                            className="btn btn-primary shadow-sm px-4"
                                            onClick={() => navigate('/wishlist')}
                                        >
                                            Wishlist
                                        </button>
                                        <button
                                            className="btn btn-secondary shadow-sm px-4"
                                            onClick={() => navigate('/login')}
                                        >
                                            Objednávky
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default UserInfo;