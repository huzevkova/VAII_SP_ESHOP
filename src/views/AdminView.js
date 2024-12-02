import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import React from "react";
import AdminTable from "../components/Admin/AdminTable";

const AdminView = ({handleTabClick, selectedTab, data, dataType, selectedRow, handleRowSelection,
                       newRow, setNewRow, handleConfirmAdd,
                       editingRow, setEditingRow, handleConfirmEdit,
                       handleAdd, handleEdit, handleDelete, handleLogout}) => {
    return (
        <div className="App">
            <Navbar bg="primary" variant="dark" className="px-4">
                <Navbar.Brand>
                    <img
                        className="brand-img"
                        src="/images/bb_books.png"
                        alt="shop brand"
                        style={{height: '50px'}}
                    />
                </Navbar.Brand>
                <Navbar.Text className="mx-auto">Administratíva</Navbar.Text>
                <Button variant="outline-light" onClick={handleLogout}>Odhlásenie</Button>
            </Navbar>
            <Container className="mt-4">
                <Row className="mb-3">
                    <Col>
                        <Button variant="primary" onClick={() => handleTabClick("Používatelia")}>
                            Používatelia
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={() => handleTabClick("Knihy")}>
                            Knihy
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={() => handleTabClick("Bloggeri")}>
                            Bloggeri
                        </Button>
                    </Col>
                </Row>
                {selectedTab ?
                    <AdminTable
                        dataType={dataType}
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
                    /> : <></>
                }
            </Container>
        </div>
    )
};

export default AdminView;