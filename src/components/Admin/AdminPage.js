import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./admin_style.css";
import AdminView from "../../views/AdminView";
import {fetchUsers, updateUser, deleteUser} from "../../api/userApi";
import {fetchBooks} from "../../api/bookApi";

const AdminPage = () => {
    const [selectedTab, setSelectedTab] = useState(null);
    const [tableName, setTableName] = useState(null);
    const [userData, setUserData] = useState(null);
    const [bookData, setBookData] = useState(null);
    const [blogData, setBlogData] = useState(null);
    const [data, setData] = useState([]);
    const [addBlock, setAddBlock] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const [editingRow, setEditingRow] = useState(null);
    const [newRow, setNewRow] = useState(null);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const response = await fetchUsers();
                setUserData(response);
            } catch (err) {
                console.error(err);
                setUserData([]);
            }
        };
        const loadBooks = async () => {
            try {
                const response = await fetchBooks();
                setBookData(response);
            } catch (err) {
                console.error(err);
                setBookData([]);
            }
        };


        if (userData == null) {
            loadUsers();
        }
        if (bookData == null) {
            loadBooks();
        }
    });

    const handleTabClick = (tabName) => {
        setSelectedTab(true);
        setTableName(tabName);
        setData(getDataForTab(tabName));
        setSelectedRow(null);
    };


    const getDataForTab = (tabName) => {
        switch (tabName) {
            case "Používatelia":
                setAddBlock(true);
                const updatedUserData = userData.map(obj => {
                    const { id_user, ...rest } = obj;
                    return { id: id_user, ...rest };
                });
                setUserData(updatedUserData);
                return updatedUserData;
            case "Knihy":
                setAddBlock(false);
                const updatedBookData = bookData.map(obj => {
                    const { id_book, ...rest } = obj;
                    return { id: id_book, ...rest };
                });
                const updatedData = updatedBookData.map(({ description, ...rest }) => rest);
                setUserData(updatedData);
                console.log(updatedData);
                return updatedData;
            case "Bloggeri":
                setAddBlock(false);
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

    const handleDelete = async () => {
        if (tableName === "Používatelia") {
            try {
                const response = await deleteUser(selectedRow);
                setData(data.filter((item) => item.id !== selectedRow));
                setSelectedRow(null);
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleAdd = () => {
        setNewRow({});
    };

    const handleEdit = () => {
        const rowToEdit = data.find((item) => item.id === selectedRow);
        setEditingRow({ ...rowToEdit });
    };

    const handleConfirmAdd = async () => {
        if (tableName === "Knihy") {

        } else if (tableName === "Bloggeri") {

        }
    };

    const handleConfirmEdit = async () => {
        if (tableName === "Používatelia") {
            try {
                console.log(editingRow);
                const response = await updateUser(editingRow);
                setData(data.map((item) => (item.id === editingRow.id ? editingRow : item)));
                setEditingRow(null);
            } catch (err) {
                console.error(err);
            }
        } else {
            setData(data.map((item) => (item.id === editingRow.id ? editingRow : item)));
            setEditingRow(null);
        }
    };

    return (
        <AdminView
            handleTabClick={handleTabClick}
            selectedTab={selectedTab}
            data={data}
            addBlocked={addBlock}
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