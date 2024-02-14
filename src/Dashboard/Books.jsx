import React, { useEffect, useState } from "react";
import "./Book.css";
import { Table } from "../React  Table/Table";
import { Modal } from "../React  Table/Modal";
import Header from "./Header";
import Sidebar from "./Siderbar";
import axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";

function Books() {
  const [books, setBooks] = useState([]);

  const handleBooks = () => {
    axios.get("http://localhost:5000/api/v1/book/list/").then((response) => {
      console.log("response", response.data);
      console.log(response.data);
      setBooks(response.data);
    });
  };

  useEffect(() => {
    handleBooks();
  }, []);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSend = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
            return newRow;
          })
        );
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };


return (
  <div className="table-wrapper">
    <table className="table">
      <thead>
        <tr>
          <th>title</th>
          <th className="expand">author</th>
          <th>publishedDate</th>
        </tr>
      </thead>

      <tbody>
        {
          books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
            </tr>
          ))
        }

        {/* {books.map((row, idx) => (
          <tr key={idx}>
            <td>{row.tite}</td>
            <td className="expand">{row.author}</td>
            <td>
              <span
                style={{ color: "black" }}
                className={`label label-${row.status}`}
              >
                {row.publishedDate}
              </span>
            </td>
          </tr>
        ))} */}
      </tbody>
    </table>
  </div>
)};

export default Books;
