import React from "react";
import PropTypes from "prop-types";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaBirthdayCake,
  FaComment,
} from "react-icons/fa"; // Import icons
import "./Notifications.css";

const iconMapping = {
  instagram: <FaInstagram />,
  twitter: <FaTwitter />,
  facebook: <FaFacebook />,
  birthday: <FaBirthdayCake />,
  comment: <FaComment />,
};

const NotificationCard = ({ icon, message, bgColor, timestamp }) => {
  return (
    <div className="notification-card">
      <div className="notification-icon" style={{ backgroundColor: bgColor }}>
        {iconMapping[icon]}
      </div>
      <div className="notification-message">
        {message}
        <span className="notification-timestamp">{timestamp}</span>
      </div>
    </div>
  );
};

NotificationCard.propTypes = {
  icon: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default NotificationCard;
