// src/Components/Sidebar/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../contexts/UserContext"; // Adjust the path as needed
import { BsPostcardFill } from "react-icons/bs";
import "./Sidebar.css";
import { FaBuysellads, FaUser, FaFonticons } from "react-icons/fa";

const Sidebar = ({ isOpen }) => {
  const { user } = useUser();
  const userName = user ? user.name : "Guest"; // Adjust field name as needed

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="name-container">
        <div className="shadows">
          <span>Hello, {userName}</span>
        </div>
      </div>
      <nav className="side-navbar">
        <ul>
          <li>
            <NavLink to="/dashboard" activeClassName="active">
              <FontAwesomeIcon icon={faTachometerAlt} />
              <span className="nav-text">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/feed" activeClassName="active">
              <BsPostcardFill />
              <span className="nav-text">Feeds</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/partner-ads" activeClassName="active">
              <FaBuysellads />
              <span className="nav-text">Partnership Ads</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/social-profiles" activeClassName="active">
              <FaUser />
              <span className="nav-text">Social Profiles</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/notifications" activeClassName="active">
              <FaFonticons />
              <span className="nav-text">Notifications</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
