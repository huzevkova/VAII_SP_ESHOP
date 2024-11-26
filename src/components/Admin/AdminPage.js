import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./admin_style.css";
import AdminView from "../../views/AdminView";
import {fetchUsers, createUser} from "../../api/userApi";

const AdminPage = () => {
    const [selectedTab, setSelectedTab] = useState(null);
    const [userData, setUserData] = useState(null);
    const [bookData, setBookData] = useState(null);
    const [blogData, setBlogData] = useState(null);
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [editingRow, setEditingRow] = useState(null);
    const [newRow, setNewRow] = useState(null);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const response = await fetchUsers();
                setUserData(response);
                const updatedData = data.map(obj => {
                    const { id_user, ...rest } = obj; // Destructure to remove oldKey
                    return { id: id_user, ...rest }; // Add newKey with the value of oldKey
                });
                setData(updatedData);
            } catch (err) {
                console.error(err);
                setData([]);
            }
        };

        loadUsers();
    });

    const handleTabClick = (tabName) => {
        setSelectedTab(true);
        setData(getDataForTab(tabName));
        setSelectedRow(null);
    };


    const getDataForTab = (tabName) => {
        switch (tabName) {
            case "Používatelia":
                return userData;
            case "Knihy":
                return [
                    { id: 1, title: "React Basics", author: "J. Doe" },
                    { id: 2, title: "Learning JavaScript", author: "M. Smith" },
                ];
            case "Bloggeri":
                return [
                    { id: 1, username: "blogmaster", posts: 5 },
                    { id: 2, username: "coderlife", posts: 10 },
                ];
            default:
                return [];
        }
    };

    const handleRowSelection = (id) => {
        setSelectedRow(id === selectedRow ? null : id);
    };

    const handleDelete = () => {
        setData(data.filter((item) => item.id !== selectedRow));
        setSelectedRow(null);

    };

    const handleAdd = () => {
        setNewRow({});
    };

    const handleEdit = () => {
        const rowToEdit = data.find((item) => item.id === selectedRow);
        setEditingRow({ ...rowToEdit });
    };

    const handleConfirmAdd = async () => {
        try {
            const response = await createUser(newRow);
            setData([...data, { id: Date.now(), ...newRow }]);
            setNewRow(null);
        } catch (err) {
            console.error(err);
        }
    };

    const handleConfirmEdit = () => {
        setData(data.map((item) => (item.id === editingRow.id ? editingRow : item)));
        setEditingRow(null);
    };

    return (
        <AdminView
            handleTabClick={handleTabClick}
            selectedTab={selectedTab}
            data={data}
            selectedRow={selectedRow}
            handleRowSelection={handleRowSelection}
            newRow={newRow}
            setNewRow={setNewRow}
            handleConfirmAdd={handleConfirmAdd}
            editingRow={editingRow}
            setEditingRow={setEditingRow}
            handleConfirmEdit={handleConfirmEdit}
            handleAdd={handleAdd}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    );
}

export default AdminPage;