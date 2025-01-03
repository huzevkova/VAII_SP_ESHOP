import MyNavbar from "../../components/General/MyNavbar";
import Sidebar from "../../components/General/Sidebar";
import FooterView from "../General/FooterView";
import React from "react";
import {useNavigate} from "react-router-dom";

const UserInfoView = ({userData}) => {
    const navigate = useNavigate();

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
                                                <td>{userData.phone_number == null ? "" : userData.phone_number}</td>
                                            </tr>
                                            <tr>
                                                <th className="fw-bold text-dark">Mesto:</th>
                                                <td>{userData.city_code == null ? "" : userData.city_code + " " + userData.city == null ? "" : userData.city}</td>
                                            </tr>
                                            <tr>
                                                <th className="fw-bold text-dark">Ulica:</th>
                                                <td>{userData.street == null ? "" : userData.street + " " + userData.house_number == null ? "" : userData.house_number}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="d-flex align-content-end gap-2 mt-3">
                                        <button className="btn btn-primary shadow-sm px-4"
                                                onClick={() => navigate('/wishlist')}>
                                            Wishlist
                                        </button>
                                        <button className="btn btn-secondary shadow-sm px-4"
                                                onClick={() => navigate('/order_history')}>
                                            Objednávky
                                        </button>
                                        {userData.type === 1 ? <button className="btn btn-success shadow-sm px-4"
                                                                       onClick={() => navigate('/administration')}>
                                            Administratíva
                                        </button> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterView/>
        </>
    )
};

export default UserInfoView;