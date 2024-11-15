import React from 'react';

const BookInfoTable = ({ bookData }) => (
    <table className="table-borderless">
        <tbody>
        <tr>
            <th scope="row" className="fw-bold">Žáner:</th>
            <td>{bookData.genre}</td>
            <th scope="row" className="fw-bold">Počet strán:</th>
            <td>{bookData.page_count}</td>
        </tr>
        <tr>
            <th scope="row" className="fw-bold">Dátum vydania:</th>
            <td>{bookData.date}</td>
            <th scope="row" className="fw-bold">Veľkosť:</th>
            <td>{bookData.size}</td>
        </tr>
        <tr>
            <th scope="row" className="fw-bold">Jazyk:</th>
            <td>{bookData.language}</td>
            <th scope="row" className="fw-bold">Obal:</th>
            <td>{bookData.cover}</td>
        </tr>
        <tr>
            <th scope="row" className="fw-bold">Originálny názov:</th>
            <td>{bookData.original}</td>
            <th scope="row" className="fw-bold">ISBN:</th>
            <td>{bookData.isbn}</td>
        </tr>
        </tbody>
    </table>
);

export default BookInfoTable;
