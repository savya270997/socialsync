// src/Components/Header/Header.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth"; // Import Firebase Auth functions
import "./Header.css";
import logo from "../../images/logo-black-horizontal.png";
import Sidebar from "../Sidebar/index";

const Header = ({ toggleDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const navigate = useNavigate(); // Hook to programmatically navigate
  const auth = getAuth(); // Initialize Firebase Auth

  const toggleSidebar = () => {
    setShowMenu(!showMenu);
  };

  const toggleMenu = () => {
    setShowPop(!showPop);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out user
      navigate("/"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <FaBars className="hamburger-icon" onClick={toggleSidebar} />
          <Link to="/dashboard" className="app-name">
            <img className="logo-header" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header-center">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="header-right">
          <label className="theme-switch">
            <input
              className="theme-switch__checkbox"
              type="checkbox"
              onChange={toggleDarkMode}
            />
            <div className="theme-switch__container">
              <div className="theme-switch__clouds"></div>
              <div className="theme-switch__stars-container">
                {/* SVG for theme switch */}
              </div>
              <div className="theme-switch__circle-container">
                <div className="theme-switch__sun-moon-container">
                  <div className="theme-switch__moon">
                    <div className="theme-switch__spot"></div>
                    <div className="theme-switch__spot"></div>
                    <div className="theme-switch__spot"></div>
                  </div>
                </div>
              </div>
            </div>
          </label>
          <div className="profile-circle" onClick={toggleMenu}>
            <FaUserCircle className="default-avatar" />
            {showPop && (
              <div className="profile-menu">
                <Link to="/my-profile" className="profile-menu-item">
                  My Profile
                </Link>
                <Link className="profile-menu-item" onClick={handleLogout}>
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
      {/* Render Sidebar here */}
      <Sidebar isOpen={showMenu} />
    </>
  );
};

export default Header;
