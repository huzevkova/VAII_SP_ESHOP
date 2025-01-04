import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
import {fetchOrderOptions, fetchOrders, updateOrder} from "../../api/orderApi";

const AdminPage = () => {

    const navigate = useNavigate();
    const auth = useAuth();

    const [error, setError] = useState(null);
    const [selectedTab, setSelectedTab] = useState(null);
    const [tableName, setTableName] = useState(null);
    const [userData, setUserData] = useState(null);
    const [bookData, setBookData] = useState(null);
    const [orderData, setOrderData] = useState(null);
    const [imageData, setImageData] = useState(null);
    const [data, setData] = useState([]);
    const [orderStatus, setOrderStatus] = useState(null);
    const [orderStatusOptions, setOrderStatusOptions] = useState(null);
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

        const loadOrderStatusOptions = async () => {
            try {
                const response = await fetchOrderOptions();
                setOrderStatusOptions(response);
            } catch (err) {
                console.error(err);
                setOrderStatusOptions([]);
            }
        }

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
        if (orderStatusOptions == null) {
            loadOrderStatusOptions();
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

    const checkBookData = (row) => {
        if (row.title === '' || row.title == null) {
            setError("Názov knihy nemôže byť prázdny.");
            return false;
        } else if (row.author === '' || row.author == null) {
            setError("Autor knihy nemôže byť prázdny.");
            return false;
        } else if (row.language === '' || row.language == null) {
            setError("Jazyk knihy nemôže byť prázdny.");
            return false;
        } else if (row.page_count === '' || row.page_count == null) {
            setError("Počet strán nemôže byť prázdny.");
            return false;
        } else if (row.publish_year === '' || row.publish_year == null) {
            setError("Rok vydania knihy nemôže byť prázdny.");
            return false;
        } else if (row.publisher === '' || row.publisher == null) {
            setError("Vydavateľ knihy nemôže byť prázdny.");
            return false;
        } else if (row.size === '' || row.size == null) {
            setError("Veľkosť knihy nemôže byť prázdna.");
            return false;
        } else if (row.price === '' || row.price == null) {
            setError("Cena knihy nemôže byť prázdna.");
            return false;
        } else if (row.cover === '' || row.cover == null) {
            setError("Obálka knihy nemôže byť prázdna.");
            return false;
        } else if (row.isbn === '' || row.isbn == null) {
            setError("ISBN knihy nemôže byť prázdne.");
            return false;
        } else {
            if (isNaN(parseFloat(row.price))) {
                setError("Zlý formát ceny.");
                return false;
            }

            if (isNaN(parseInt(row.publish_year))) {
                setError("Zlý formát roku.");
                return false;
            }

            if (isNaN(parseInt(row.page_count))) {
                setError("Zlý formát počtu strán.");
                return false;
            }

            if (editingRow.image !== '' && isNaN(parseInt(row.image))) {
                setError("Zlý formát obrázku (zadajte číselné ID).");
                return false;
            }
        }
        return true;
    }

    const handleDelete = async () => {
        if (tableName === "Používatelia") {
            try {
                await deleteUser(selectedRow);
                setUserData(data.filter((item) => item.id !== selectedRow));
                setData(data.filter((item) => item.id !== selectedRow));
                setSelectedRow(null);
            } catch (err) {
                console.error(err);
                setError(err.message);
            }
        } else if (tableName === "Knihy") {
            try {
                await deleteBook(selectedRow);
                setBookData(data.filter((item) => item.id !== selectedRow));
                setData(data.filter((item) => item.id !== selectedRow));
                setSelectedRow(null);
            } catch (err) {
                console.error(err);
                setError(err.message);
            }
        } else if (tableName === "Obrázky") {
            try {
                await deleteImage(selectedRow);
                setImageData(data.filter((item) => item.id !== selectedRow));
                setData(data.filter((item) => item.id !== selectedRow));
                setSelectedRow(null);
            } catch (err) {
                console.error(err);
                setError(err.message);
            }
        }
    };

    const handleAdd = () => {
        setNewRow({});
    };

    const handleEdit = () => {
        const rowToEdit = data.find((item) => item.id === selectedRow);
        setEditingRow({...rowToEdit});
    };

    const handleConfirmAdd = async () => {
        if (tableName === "Knihy") {
            if (!checkBookData(newRow)) {
                return;
            }
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
                    setError(err.message);
                }
                setOpenDescription(false);
                setNewDescription(false);
            }
        } else if (tableName === "Obrázky") {
            if (newRow.path === '' || newRow.path == null) {
                setError("Cesta k súboru nemôže byť prázdna.");
            } else {
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
                    setError(err.message);
                }
            }
        }
    };

    const handleConfirmEdit = async () => {
        if (tableName === "Používatelia") {
            try {
                if (editingRow.name === '') {
                    setError("Meno nemôže byť prázdne.");
                } else if (editingRow.email  === '') {
                    setError("Email nemôže byť prázdny.");
                } else {
                    await updateUser(editingRow);
                    setData(data.map((item) => (item.id === editingRow.id ? editingRow : item)));
                    setUserData(data.map((item) => (item.id === editingRow.id ? editingRow : item)));
                    setEditingRow(null);
                    setError(null);
                }
            } catch (err) {
                console.error(err);
                setError(err.message);
            }
        } else if (tableName === "Knihy") {
            if (!checkBookData(editingRow)) {
                return;
            }

            if (openDescription === false) {
                const book = bookData.find((row) => row.id === editingRow.id);
                setDescription(book.description);
                setOpenDescription(true);
            } else {
                try {
                    const editingRowWithDescription = {...editingRow, description: description};
                    await updateBook(editingRowWithDescription);
                    setData(data.map((item) => (item.id === editingRow.id ? editingRow : item)));
                    setBookData(data.map((item) => (item.id === editingRowWithDescription.id ? editingRowWithDescription : item)));
                    setEditingRow(null);
                    setError(null);
                } catch (err) {
                    console.error(err);
                    setError(err.message);
                }
                setOpenDescription(false);
            }
        } else if (tableName === "Obrázky") {
            if (editingRow.path === '') {
                setError("Cesta k súboru nemôže byť prázdna.");
            }
            try {
                const {id, path, name} = editingRow;
                await updateImage({path, name, id});
                const id_image = editingRow.id;
                const id_book = editingRow.id_book;
                await updateBookImage({id_image, id_book});
                setData(data.map((item) => (item.id === editingRow.id ? editingRow : item)));
                setImageData(data.map((item) => (item.id === editingRow.id ? editingRow : item)));
                setEditingRow(null);
                setError(null);
            } catch (err) {
                console.error(err);
                setError(err.message);
            }
        } else if (tableName === "Objednávky") {
            try {
                const status = orderStatus.id_status;
                const id_order = editingRow.id;
                const id_user = editingRow.id_user;
                const updatedEditingRow = { ...editingRow, description: orderStatus.description, id_status: status, status: status };
                await updateOrder({status, id_order, id_user});
                setData(data.map((item) => (item.id === updatedEditingRow.id ? updatedEditingRow : item)));
                setOrderData(data.map((item) => (item.id === updatedEditingRow.id ? updatedEditingRow : item)));
                setEditingRow(null);
                setError(null);
            } catch (err) {
                console.error(err);
                setError(err.message);
            }
        }
    };

    const handleCancel = () => {
        setNewRow(null);
        setEditingRow(null);
        setError(null);
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
            orderOptions={orderStatusOptions}
            setOrderStatus={setOrderStatus}
            error={error}
        />
    );
}

export default AdminPage;