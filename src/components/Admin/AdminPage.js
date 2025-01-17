import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminView from "../../views/Admin/AdminView";
import {fetchUsers, updateUser, deleteUser} from "../../api/userApi";
import {
    createBook,
    createImage,
    deleteBook, deleteImage,
    fetchBooks,
    fetchImages, removeImageFile, saveImageFile,
    updateBook,
    updateBookImage,
    updateImage
} from "../../api/bookApi";
import {useAuth} from "../../AuthProvider";
import {fetchOrderOptions, fetchOrders, updateOrder} from "../../api/orderApi";

const AdminPage = () => {

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
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileChange, setFileChange] = useState(false);


    /**
     * Načítanie dát pri spustení.
     */
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

    /**
     * Spracovanie prekliknutia sa na tabuľku.
     * @param tabName
     */
    const handleTabClick = (tabName) => {
        setSelectedTab(true);
        setTableName(tabName);
        setData(getDataForTab(tabName));
        setSelectedRow(null);
    };

    /**
     * Spracovnaie odhlásenia.
     */
    const handleLogOut = () => {
        auth.logOut();
    }

    /**
     * Spracovanie zmeny popisu knihy.
     * @param e
     */
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    /**
     * Nastavenia správnych dát pre tabuľku.
     * @param tabName
     * @returns {*|*[]}
     */
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
                let updatedData = updatedBookData.map(({id_image, path, name, ...rest}) => rest);
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

    /**
     * Spracovanie výberu riadku v tabuľke.
     * @param id
     */
    const handleRowSelection = (id) => {
        setSelectedRow(id === selectedRow ? null : id);
    };

    /**
     * Validácia vstupných údajov pri editácii knihy alebo vytvorení novej knihy.
     * @param row
     * @returns {boolean}
     */
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

            if (row.image !== '' && row.image != null && isNaN(parseInt(row.image))) {
                setError("Zlý formát obrázku (zadajte číselné ID).");
                return false;
            }
        }
        return true;
    }

    /**
     * Spracovanie zmazania používateľa, knihy alebo obrázku.
     * @returns {Promise<void>}
     */
    const handleDelete = async () => {
        if (tableName === "Používatelia") {
            try {
                await deleteUser(selectedRow);
                setUserData(data.filter((item) => item.id !== selectedRow));
                setData(data.filter((item) => item.id !== selectedRow));
                setSelectedRow(null);
                setError(null);
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
                setError(null);
            } catch (err) {
                console.error(err);
                setError(err.message);
            }
        } else if (tableName === "Obrázky") {
            try {
                const imageObj = imageData.find(image => image.id === selectedRow);
                console.log(imageObj.path);
                const image = imageObj.path;
                await removeImageFile(image);
                await deleteImage(selectedRow);
                setImageData(data.filter((item) => item.id !== selectedRow));
                setData(data.filter((item) => item.id !== selectedRow));
                setSelectedRow(null);
                setError(null);
            } catch (err) {
                console.error(err);
                setError(err.message);
            }
        }
    };

    /**
     * Spracovanie nového riadku.
     */
    const handleAdd = () => {
        setNewRow({});
    };

    /**
     * Spracovanie úpravy existujúceho riadku.
     */
    const handleEdit = () => {
        const rowToEdit = data.find((item) => item.id === selectedRow);
        setEditingRow({...rowToEdit});
    };

    /**
     * Spracovanie potvrdenia vytvorenia nového riadku.
     * @returns {Promise<void>}
     */
    const handleConfirmAdd = async (e) => {
        e.preventDefault();
        if (tableName === "Knihy") {
            if (openDescription === false) {
                setNewDescription(true);
                setOpenDescription(true);
            } else {
                setOpenDescription(false);
                setNewDescription(false);
                if (!checkBookData(newRow)) {
                    return;
                }
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
                    setError(null);
                } catch (err) {
                    console.error(err);
                    setError(err.message);
                }
            }
        } else if (tableName === "Obrázky") {
            if (!selectedFile) {
                setError("Musíte nahrať obrázok.");
            } else {
                try {
                    let newRowUpdated;
                    if (!newRow.hasOwnProperty("id_book")) {
                        newRowUpdated = {id_book: null, ...newRow};
                    } else {
                        newRowUpdated = newRow;
                    }
                    let fileName = null;
                    const formData = new FormData();
                    formData.append("image", selectedFile);

                    try {
                        const data = await saveImageFile(formData);
                        fileName = data.filePath.split('/').pop();
                        console.log(fileName);
                        setError(null);
                    } catch (err) {
                        console.error(err);
                    }

                    newRowUpdated = {path: fileName, ...newRowUpdated}
                    const insert = {path: fileName, name: newRowUpdated.name, id_book: newRowUpdated.id_book};
                    const {id} = await createImage(insert);
                    let newTableRow = {id: id, ...newRowUpdated};
                    const save = {id: newTableRow.id, path: fileName, name: newTableRow.name, id_book: newTableRow.id_book};
                    setImageData([...data, save]);
                    setData([...data, save]);
                    setNewRow(null);
                    setError(null);
                } catch (err) {
                    console.error(err);
                    setError(err.message);
                }
            }
        }
    };

    /**
     * Spracovanie potvrdenia úprav existujúceho riadku.
     * @returns {Promise<void>}
     */
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
            if (fileChange && selectedFile == null) {
                setError("Cesta k súboru nemôže byť prázdna.");
                return;
            }
            try {
                let fileName = null;
                if (fileChange) {
                    try {
                        const data = await removeImageFile(editingRow.path);
                        console.log(data.message);
                    } catch (err) {
                        console.error(err);
                        setError(err.message);
                        return;
                    }

                    const formData = new FormData();
                    formData.append("image", selectedFile);

                    try {
                        const data = await saveImageFile(formData)
                        fileName = data.filePath.split('/').pop();
                        setError(null);
                    } catch (err) {
                        console.error(err);
                        setError(err.message);
                        return;
                    }
                    setFileChange(false);
                }
                let editingRowUpdated;
                if (fileName != null) {
                    editingRowUpdated = {id: editingRow.id, path: fileName, name: editingRow.name, id_book: editingRow.id_book};
                } else {
                    editingRowUpdated = editingRow;
                }
                const {id, path, name} = editingRowUpdated;
                await updateImage({path: path, name, id});
                const id_image = editingRowUpdated.id;
                const id_book = editingRowUpdated.id_book;
                await updateBookImage({id_image, id_book});
                setData(data.map((item) => (item.id === editingRowUpdated.id ? editingRowUpdated : item)));
                setImageData(data.map((item) => (item.id === editingRowUpdated.id ? editingRowUpdated : item)));
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

    /**
     * Spracovanie zrušenia akcie.
     */
    const handleCancel = () => {
        setNewRow(null);
        setEditingRow(null);
        setError(null);
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            const fileName = file.name;
            if (newRow) {
                setNewRow({ ...newRow, path: fileName });
            }
            if (editingRow) {
                setEditingRow({ ...editingRow, path: fileName });
            }
            setFileChange(true);
        }
    };

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
            handleFileChange={handleFileChange}
            error={error}
        />
    );
}

export default AdminPage;