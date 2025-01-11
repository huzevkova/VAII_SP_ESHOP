import React from 'react';

const BookInfoTableView = ({ bookData, bookGenres }) => (
    <table className="table-borderless">
        <tbody>
        <tr>
            <th scope="row" className="fw-bold">Žáner:</th>
            <td id="genre">{bookGenres}</td>
            <th scope="row" className="fw-bold">Počet strán:</th>
            <td>{bookData.page_count}</td>
        </tr>
        <tr>
            <th scope="row" className="fw-bold">Rok vydania:</th>
            <td>{bookData.publish_year}</td>
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
            <td>{bookData.original_title}</td>
            <th scope="row" className="fw-bold">ISBN:</th>
            <td>{bookData.isbn}</td>
        </tr>
        </tbody>
    </table>
);

export default BookInfoTableView;
