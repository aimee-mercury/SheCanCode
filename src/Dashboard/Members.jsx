import React, { useState } from "react";
import "./Book.css";
import DataTable from "react-data-table-component";
import { BsSearch } from "react-icons/bs";
import Header from "./Header";
import Sidebar from "./Siderbar";

function Members() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];
  const data = [
    {
      id: 1,
      name: "Rachel",
      email: "rachel@gmail.com",
      age: "23",
      action: "Delete",
    },
    {
      id: 2,
      name: "Aimee",
      email: "aimee@gmail.com",
      age: "20",
      action: "Delete",
    },
    {
      id: 3,
      name: "Josee",
      email: "josee@gmail.com",
      age: "26",
      action: "Delete",
    },
    {
      id: 4,
      name: "Alice",
      email: "alice@gmail.com",
      age: "24",
      action: "Delete",
    },
    {
      id: 5,
      name: "Hope",
      email: "hope@gmail.com",
      age: "25",
      action: "Delete",
    },
    {
      id: 6,
      name: "Honorine",
      email: "honorine@gmail.com",
      age: "26",
      action: "Delete",
    },
    {
      id: 7,
      name: "Joy",
      email: "joy@gmail.com",
      age: "24",
      action: "Delete",
    },
    {
      id: 8,
      name: "Blandine",
      email: "blandine@gmail.com",
      age: "25",
      action: "Delete",
    },
    {
      id: 9,
      name: "Liliane",
      email: "liliane@gmail.com",
      age: "25",
      action: "Delete",
    },
  ];
  const [records, setRecords] = useState(data);
  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  
  
  return (
    <>
      <Header OpenSidebar={OpenSidebar} />
      <div className="finance-container">
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <div
          className="members-container-dashboard"
          data-aos="fade-up"
          data-aos-duration={2000}
          style={{ paddingLeft: "110px",paddingRight:"110px"}}
        >
          <div className="members-search-div">
            <input
              type="text"
              onChange={handleFilter}
              className="members-search-input"
            />
            <div className="members-search-div">
              <BsSearch className="dashboard-search-icon" />
            </div>
          </div>
          <DataTable
            columns={columns}
            data={records}
            selectableRows
            fixedHeader
            pagination
          ></DataTable>
        </div>
      </div>
    </>
  );
}

export default Members;
