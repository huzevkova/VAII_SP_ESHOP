import {Button, Form, Table} from "react-bootstrap";
import React from "react";

const AdminTable = ({dataType, data, selectedRow, handleRowSelection,
                    newRow, setNewRow, handleConfirmAdd,
                    editingRow, setEditingRow, handleConfirmEdit,
                    handleAdd, handleEdit, handleDelete, handleCancel}) => {

    return (
        <>
            <Table hover responsive>
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
                                    defaultValue=""
                                    placeholder={`Enter ${key}`}
                                    onChange={(e) =>
                                        setNewRow({...newRow, [key]: e.target.value})
                                    }
                                />
                            </td>
                        ))}
                        {dataType === 'Bloggeri' ?
                            <td>
                                <Form.Control
                                    type="text"
                                    placeholder={`Enter password`}
                                    onChange={(e) =>
                                        setNewRow({...newRow, password: e.target.value})
                                    }
                                />
                            </td>
                            : null
                        }
                        <td>
                            <Button variant="success" size="sm" onClick={handleConfirmAdd}>
                                OK
                            </Button>
                        </td>
                        <td>
                            <Button variant="danger" size="sm" onClick={handleCancel}>
                                X
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
                                OK
                            </Button>
                        </td>
                        <td>
                            <Button variant="danger" size="sm" onClick={handleCancel}>
                                X
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
                <Button variant="success" disabled={dataType === 'Používatelia'} onClick={handleAdd}>
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
