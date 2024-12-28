import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./admin_style.css";
import AdminView from "../../views/Admin/AdminView";
import {fetchUsers, updateUser, deleteUser} from "../../api/userApi";
import {createBook, deleteBook, fetchBooks, updateBook} from "../../api/bookApi";
import {fetchBloggers, updateBlogger, createBlogger, deleteBlogger} from "../../api/bloggerApi"
import {useNavigate} from "react-router-dom";

const AdminPage = () => {
    const [selectedTab, setSelectedTab] = useState(null);
    const [tableName, setTableName] = useState(null);
    const [userData, setUserData] = useState(null);
    const [bookData, setBookData] = useState(null);
    const [bloggerData, setBloggerData] = useState(null);
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [editingRow, setEditingRow] = useState(null);
    const [newRow, setNewRow] = useState(null);
    const [openDescription, setOpenDescription] = useState(false);
    const [description, setDescription] = useState(null);
    const [newDescription, setNewDescription] = useState(false);

    const navigate = useNavigate();

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

        const loadBloggers = async () => {
            try {
                const response = await fetchBloggers();
                setBloggerData(response);
            } catch (err) {
                console.error(err);
                setBloggerData([{ id: "#", name: null, email: null, image: null }]);
            }
        };

        if (userData == null) {
            loadUsers();
        }
        if (bookData == null) {
            loadBooks();
        }
        if (bloggerData == null) {
            loadBloggers();
        }
    });

    const handleTabClick = (tabName) => {
        setSelectedTab(true);
        setTableName(tabName);
        setData(getDataForTab(tabName));
        setSelectedRow(null);
    };

    const handleLogOut = () => {
        navigate('/');
    }

    const handleDescription = (e) => {
        console.log(e.target.value);
        setDescription(e.target.value);
    }

    const getDataForTab = (tabName) => {
        switch (tabName) {
            case "Používatelia":
                const updatedUserData = userData.map(obj => {
                    const { id_user, ...rest } = obj;
                    return { id: id_user, ...rest };
                });
                setUserData(updatedUserData);
                return updatedUserData;
            case "Knihy":
                const updatedBookData = bookData.map(obj => {
                    const { id_book, ...rest } = obj;
                    return { id: id_book, ...rest };
                });
                const updatedData = updatedBookData.map(({ description, ...rest }) => rest);
                setBookData(updatedBookData);
                return updatedData;
            case "Bloggeri":
                const updatedBloggerData = bloggerData.map(obj => {
                    const { id_blogger, ...rest } = obj;
                    return { id: id_blogger, ...rest };
                });
                setBloggerData(updatedBloggerData);
                return updatedBloggerData;
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
                setUserData(data.filter((item) => item.id !== selectedRow));
                setData(data.filter((item) => item.id !== selectedRow));
                setSelectedRow(null);
            } catch (err) {
                console.error(err);
            }
        } else if (tableName === "Knihy") {
            try {
                const response = await deleteBook(selectedRow);
                setBookData(data.filter((item) => item.id !== selectedRow));
                setData(data.filter((item) => item.id !== selectedRow));
                setSelectedRow(null);
            } catch (err) {
                console.error(err);
            }
        } else if (tableName === "Bloggeri") {
            try {
                const response = await deleteBlogger(selectedRow);
                setBloggerData(data.filter((item) => item.id !== selectedRow));
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
            if (openDescription === false) {
                setNewDescription(true);
                setOpenDescription(true);
            } else {
                try {
                    const newRowWithDescription = { ...newRow, description: {description} };
                    const {bookId, message} = await createBook(newRowWithDescription);
                    const newTableRow = {id: bookId, ...newRow};
                    const requiredKeys = data[0] ? Object.keys(data[0]) : [];
                    const completeRow = requiredKeys.reduce((acc, key) => {
                        acc[key] = newTableRow[key] || "";
                        return acc;
                    }, {});
                    setBookData([...data, newRowWithDescription]);
                    setData([...data, completeRow]);
                    setNewRow(null);
                    console.log(message);
                } catch (err) {
                    console.error(err);
                }
                setOpenDescription(false);
                setNewDescription(false);
            }
        } else if (tableName === "Bloggeri") {
            try {
                const {bloggerId, message} = await createBlogger(newRow);
                const newTableRow = { id: bloggerId, ...newRow};
                const requiredKeys = data[0] ? Object.keys(data[0]) : [];
                const completeRow = requiredKeys.reduce((acc, key) => {
                    acc[key] = newTableRow[key] || "";
                    return acc;
                }, {});
                setBloggerData([...data, completeRow]);
                setData([...data, completeRow]);
                setNewRow(null);
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleConfirmEdit = async () => {
        if (tableName === "Používatelia") {
            try {
                console.log(editingRow);
                const response = await updateUser(editingRow);
                setData(data.map((item) => (item.id === editingRow.id ? editingRow : item)));
                setUserData(data.map((item) => (item.id === editingRow.id ? editingRow : item)));
                setEditingRow(null);
            } catch (err) {
                console.error(err);
            }
        } else if (tableName === "Knihy") {
            if (openDescription === false) {
                const book = bookData.find((row) => row.id === editingRow.id);
                console.log(book.description);
                setDescription(book.description);
                setOpenDescription(true);
            } else {
                try {
                    const editingRowWithDescription = { ...editingRow, description: description };
                    const response = await updateBook(editingRowWithDescription);
                    setData(data.map((item) => (item.id === editingRow.id ? editingRow : item)));
                    setBookData(data.map((item) => (item.id === editingRowWithDescription.id ? editingRowWithDescription : item)));
                    setEditingRow(null);
                } catch (err) {
                    console.error(err);
                }
                setOpenDescription(false);
            }
        } else if (tableName === "Bloggeri") {
            try {
                const response = await updateBlogger(editingRow);
                setData(data.map((item) => (item.id === editingRow.id ? editingRow : item)));
                setBloggerData(data.map((item) => (item.id === editingRow.id ? editingRow : item)));
                setEditingRow(null);
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleCancel = () => {
        setNewRow(null);
        setEditingRow(null);
    }

    return (
        <AdminView
            handleTabClick={handleTabClick}
            selectedTab={selectedTab}
            data={data}
            dataType={tableName}
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
            handleLogout={handleLogOut}
            handleCancel={handleCancel}
            openDescription={openDescription}
            handleDescription={handleDescription}
            description={description}
            newDescription={newDescription}
        />
    );
}

export default AdminPage;