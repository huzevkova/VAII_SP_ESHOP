import {Button, Form, Table} from "react-bootstrap";
import React from "react";

const AdminTable = ({data, selectedRow, handleRowSelection,
                    newRow, setNewRow, handleConfirmAdd,
                    editingRow, setEditingRow, handleConfirmEdit,
                    handleAdd, handleEdit, handleDelete}) => {

    return (
        <>
            <Table bordered hover responsive>
                <thead>
                <tr>
                    {Object.keys(data[0] || {}).map((key) => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row) => (
                    <tr
                        key={row.id}
                        className={row.id === selectedRow ? "table-active" : ""}
                        onClick={() => handleRowSelection(row.id)}
                    >
                        {Object.values(row).map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                ))}

                {newRow && (
                    <tr>
                        {Object.keys(data[0] || {}).map((key, index) => (
                            <td key={index}>
                                <Form.Control
                                    type="text"
                                    placeholder={`Enter ${key}`}
                                    onChange={(e) =>
                                        setNewRow({ ...newRow, [key]: e.target.value })
                                    }
                                />
                            </td>
                        ))}
                        <td>
                            <Button variant="success" size="sm" onClick={handleConfirmAdd}>
                                Potvrdiť
                            </Button>
                        </td>
                    </tr>
                )}

                {editingRow && (
                    <tr>
                        {Object.keys(editingRow).map((key, index) => (
                            <td key={index}>
                                <Form.Control
                                    type="text"
                                    value={editingRow[key]}
                                    onChange={(e) =>
                                        setEditingRow({
                                            ...editingRow,
                                            [key]: e.target.value,
                                        })
                                    }
                                />
                            </td>
                        ))}
                        <td>
                            <Button variant="success" size="sm" onClick={handleConfirmEdit}>
                                Potvrdiť
                            </Button>
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>

            <div className="d-flex gap-2">
                <Button variant="danger" disabled={!selectedRow} onClick={handleDelete}>
                    Odstrániť
                </Button>
                <Button variant="success" onClick={handleAdd}>
                    Pridať
                </Button>
                <Button variant="warning" disabled={!selectedRow} onClick={handleEdit}>
                    Upraviť
                </Button>
            </div>
        </>
    )
};

export default AdminTable;
