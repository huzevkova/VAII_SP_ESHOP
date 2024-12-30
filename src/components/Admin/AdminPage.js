import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./admin_style.css";
import AdminView from "../../views/Admin/AdminView";
import {fetchUsers, updateUser, deleteUser} from "../../api/userApi";
import {
    createBook,
    createImage,
    deleteBook, deleteImage,
    fetchBooks,
    fetchImages,
    updateBook,
    updateBookImage,
    updateImage
} from "../../api/bookApi";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../AuthProvider";
import {fetchOrders} from "../../api/orderApi";

const AdminPage = () => {

    const navigate = useNavigate();
    const auth = useAuth();

    const [selectedTab, setSelectedTab] = useState(null);
    const [tableName, setTableName] = useState(null);
    const [userData, setUserData] = useState(null);
    const [bookData, setBookData] = useState(null);
    const [orderData, setOrderData] = useState(null);
    const [imageData, setImageData] = useState(null);
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [editingRow, setEditingRow] = useState(null);
    const [newRow, setNewRow] = useState(null);
    const [openDescription, setOpenDescription] = useState(false);
    const [description, setDescription] = useState(null);
    const [newDescription, setNewDescription] = useState(false);

    const {user} = useAuth();

    if (user !== "admin") {
        navigate('/login');
    }

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

        const loadOrders= async () => {
            try {
                const response = await fetchOrders();
                setOrderData(response);
            } catch (err) {
                console.error(err);
                setOrderData([]);
            }
        };

        const loadImages= async () => {
            try {
                const response = await fetchImages();
                setImageData(response);
            } catch (err) {
                console.error(err);
                setImageData([]);
            }
        };

        if (userData == null) {
            loadUsers();
        }
        if (bookData == null) {
            loadBooks();
        }
        if (orderData == null) {
            loadOrders();
        }
        if (imageData == null) {
            loadImages();
        }
    });

    const handleTabClick = (tabName) => {
        setSelectedTab(true);
        setTableName(tabName);
        setData(getDataForTab(tabName));
        setSelectedRow(null);
    };

    const handleLogOut = () => {
        auth.logOut();
    }

    const handleDescription = (e) => {
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
                let updatedData = updatedBookData.map(({ description, ...rest }) => rest);
                updatedData = updatedData.map(({id_image, path, name, ...rest}) => rest);
                setBookData(updatedBookData);
                return updatedData;
            case "Objednávky":
                const updatedOrderData = orderData.map(obj => {
                    const { id_order, ...rest } = obj;
                    return { id: id_order, ...rest };
                });
                setOrderData(updatedOrderData);
                return updatedOrderData;
            case "Obrázky":
                const updatedImageData = imageData.map(obj => {
                    const { id_image, ...rest } = obj;
                    return { id: id_image, ...rest };
                });
                setImageData(updatedImageData);
                return updatedImageData;
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
        } else if (tableName === "Obrázky") {
            try {
                const response = await deleteImage(selectedRow);
                setImageData(data.filter((item) => item.id !== selectedRow));
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
                } catch (err) {
                    console.error(err);
                }
                setOpenDescription(false);
                setNewDescription(false);
            }
        } else if (tableName === "Obrázky") {
            try {
                let newRowUpdated;
                if (!newRow.hasOwnProperty("id_book")) {
                    newRowUpdated = {id_book: null, ...newRow};
                } else {
                    newRowUpdated = newRow;
                }
                const {id} = await createImage(newRowUpdated);
                const newTableRow = {id: id, ...newRow};
                const requiredKeys = data[0] ? Object.keys(data[0]) : [];
                const completeRow = requiredKeys.reduce((acc, key) => {
                    acc[key] = newTableRow[key] || "";
                    return acc;
                }, {});
                setImageData([...data, newTableRow]);
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
        } else if (tableName === "Obrázky") {
            try {
                const {id, path, name} = editingRow;
                const responseImage = await updateImage({path, name, id});
                const id_image = editingRow.id;
                const id_book = editingRow.id_book;
                const responseBook = await updateBookImage({id_image, id_book});
                setData(data.map((item) => (item.id === editingRow.id ? editingRow : item)));
                setImageData(data.map((item) => (item.id === editingRow.id ? editingRow : item)));
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