import React from "react";
import { BsGrid1X2Fill, BsPeopleFill, BsFillGearFill } from "react-icons/bs";
import { SiBookstack } from "react-icons/si";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/1.jpg";
import { Link } from "react-router-dom";
import "./Dashboard.css";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
//   const navigate = useNavigate();
//   const user = JSON.parse(navigate);
//   const token = localStorage.getItem("token");
//   const handleLogout = () => {
//     localStorage.removeItem("token", null);
//     localStorage.removeItem("admin", "");
//     navigate("/");
//   };

//   useEffect(() => {
//     if (!token) {
//       navigate("/login");
//     }
//   });
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src={logo} className="icon-header" /> <h2>LMS Project</h2>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/dashboard">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/books">
            <SiBookstack className="icon" /> Books
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/members">
            <BsPeopleFill className="icon" /> Members
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/finance">
            <RiMoneyDollarCircleFill className="icon" /> Financial Details
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/settings">
            <BsFillGearFill className="icon" /> Settings
          </Link>
        </li>
        <li className="sidebar-list-item">
          <button>
            <FaSignOutAlt className="icon" /> Signout
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
