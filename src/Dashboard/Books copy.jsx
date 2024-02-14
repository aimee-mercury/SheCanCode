import React, { useEffect, useState } from "react";
import "./Book.css";
import { Table } from "../React  Table/Table";
import { Modal } from "../React  Table/Modal";
import Header from "./Header";
import Sidebar from "./Siderbar";
import axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";

function Books() {
  // const [modalOpen, setModalOpen] = useState(false);
  // const [rows, setRows] = useState([]);
  // const [rowToEdit, setRowToEdit] = useState(null);
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  // const [posts, setPosts] = useState([]);
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
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5000/api/v1/book/list');
  //       const data = response;
  //       console.log("#", data);
  //       console.log("Books available", response);
  //       setPosts(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5000/api/v1/book/list');
  //       const data = await response.json();
  //       console.log('API Response:', data);
  //       console.log("Books available", data);
  //       setPosts(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
  // books.map((item)=>{
  //   return (

  //     <tr className="text-2xl border-b-2    border-b-slate-200    ">
  //         <td className="lg:px-[2rem]  text-center break-words  ">
  //           {item.tite}
  //         </td>
  //         <td className="lg:px-[2rem] px-[0.5rem] break-words      text-center  ">
  //           {/* {item.author} */}
  //         </td>
  //         <td className="md:px-[0.5rem] text-center  md:py-[1.5rem]">
  //           {item.publishedDate}
  //         </td>
  //         <td className="md:px-[2rem] text-center">{item.date}</td>
  //         <td className="md:px-[2rem] text-center">{item.numberOfTickets}</td>
  //         <td className="md:px-[2rem] text-center">
  //           <span className="flex space-x-4 md:px-4">
  //             <button
  //               onClick={() => {
  //                 navigate(`/dashboard/editBooking/${item._id}`);
  //               }}
  //             >
  //               <BsPencilFill />
  //             </button>
  //             <button>
  //               <BsTrashFill
  //                 className="text-red-500"
  //                 onClick={() => {
  //                   handleDelete(item._id);
  //                 }}
  //               />
  //             </button>
  //           </span>
  //         </td>
  //       </tr>
  //   )
  // })
}
return (
  <div className="table-wrapper">
    <table className="table">
      <thead>
        <tr>
          <th>title</th>
          <th className="expand">author</th>
          <th>publishedDate</th>
          {/* <th>Actions</th> */}
        </tr>
      </thead>
      <tbody>
        {books.map((row, idx) => (
          // const statusText =
          // row.status.charAt(0).toUpperCase() + row.status.slice(1);
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
            {/* <td className="fit">
                <span className="actions">
                  <BsFillTrashFill
                    className="delete-btn"
                  />
                  <BsFillPencilFill
                    className="edit-btn"
                  />
                </span>
              </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Books;
