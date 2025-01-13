import { Button, Form, Table } from "react-bootstrap";
import React, { useState } from "react";

const AdminTableView = ({dataType, data, selectedRow, handleRowSelection,
                            newRow, setNewRow, handleConfirmAdd,
                            editingRow, setEditingRow, handleConfirmEdit,
                            handleAdd, handleEdit, handleDelete, handleCancel,
                            orderOptions, setOrderStatus, handleFileChange}) => {

    return (
        <>
            <Table hover responsive>
                <thead>
                <tr>
                    {Object.keys(data[0] || {}).map((key) =>
                        key !== "description" ? <th key={key}>{key}</th> : null
                    )}
                </tr>
                </thead>
                <tbody>
                {data.map((row) => (
                    <tr
                        key={row.id}
                        className={row.id === selectedRow ? "table-active" : ""}
                        onClick={() => handleRowSelection(row.id)}
                    >
                        {Object.entries(row).map(([key, value], index) =>
                            key !== "description" ? <td key={index}>{value}</td> : null
                        )}
                    </tr>
                ))}

                {newRow && (
                    <tr>
                        {Object.keys(data[0] || {}).map((key, index) =>
                            key !== "description" ? (
                                <td key={index}>
                                    {key !== "id" ? (
                                        key === "path" && dataType === "Obrázky" ? (
                                            <Form.Control
                                                type="file"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                            />
                                        ) : (
                                            <Form.Control
                                                type="text"
                                                defaultValue=""
                                                placeholder=""
                                                onChange={(e) =>
                                                    setNewRow({ ...newRow, [key]: e.target.value })
                                                }
                                            />
                                        )
                                    ) : (
                                        index + 1
                                    )}
                                </td>
                            ) : null
                        )}
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
                        {dataType !== "Objednávky"
                            ? Object.keys(editingRow).map((key, index) =>
                                key !== "description" ? (
                                    <td key={index}>
                                        {key !== "id" ? (
                                            key === "path" && dataType === "Obrázky" ? (
                                                <Form.Control
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                />
                                            ) : (
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
                                            )
                                        ) : (
                                            index
                                        )}
                                    </td>
                                ) : null
                            )
                            : Object.keys(editingRow).map((key, index) => (
                                <td key={index}>
                                    {key === "description" ? (
                                        <Form.Select value={editingRow[key]}>
                                            {orderOptions.map((option) => (
                                                <option
                                                    key={option.description}
                                                    onClick={() => {
                                                        setOrderStatus(option);
                                                        setEditingRow({
                                                            ...editingRow,
                                                            [key]: option.description,
                                                        });
                                                    }}
                                                >
                                                    {option.description}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    ) : (
                                        editingRow[key]
                                    )}
                                </td>
                            ))}
                        <td>
                            <Button
                                variant="success"
                                size="sm"
                                onClick={handleConfirmEdit}
                            >
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
                <Button
                    variant="danger"
                    disabled={!selectedRow || dataType === "Objednávky"}
                    onClick={handleDelete}
                >
                    Odstrániť
                </Button>
                <Button
                    variant="success"
                    disabled={dataType === "Používatelia" || dataType === "Objednávky"}
                    onClick={handleAdd}
                >
                    Pridať
                </Button>
                <Button variant="warning" disabled={!selectedRow} onClick={handleEdit}>
                    Upraviť
                </Button>
            </div>
        </>
    );
};

export default AdminTableView;
