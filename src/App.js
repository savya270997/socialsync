import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import Login from "./Components/Login/index";
import Dashboard from "./Components/Dashboard/index";
import Header from "./Components/Header/index";
import Sidebar from "./Components/Sidebar/index";
import "./App.css";
import Feed from "./Components/Feed/index";
import PartnershipAds from "./Components/PartnershipAds/index";
import SocialProfile from "./Components/SocialProfiles/index";
import Notifications from "./Components/Notifications/index";

function AppContent() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "light" : "dark"
    );
  };

  const location = useLocation();
  const isLoginScreen = location.pathname === "/";

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      {!isLoginScreen && (
        <>
          <Header toggleDarkMode={toggleDarkMode} />
          <Sidebar />
        </>
      )}
      <div
        className={`main-content ${
          isLoginScreen ? "no-sidebar" : "with-sidebar"
        }`}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/partner-ads" element={<PartnershipAds />} />
          <Route path="/social-profiles" element={<SocialProfile />} />
          <Route path="/notifications" element={<Notifications />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <AppContent />
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
