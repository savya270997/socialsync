import React from "react";
import NotificationCard from "./NotificationCard";
import "./Notifications.css";

const notifications = [
  {
    icon: "instagram",
    message: "Someone liked your photo",
    bgColor: "#E4405F",
    timestamp: "2 hours ago",
  },
  {
    icon: "twitter",
    message: "Someone retweeted your post",
    bgColor: "#1DA1F2",
    timestamp: "5 hours ago",
  },
  {
    icon: "facebook",
    message: "Someone shared your post",
    bgColor: "#1877F2",
    timestamp: "1 day ago",
  },
  {
    icon: "facebook",
    message: "Your friend’s birthday is today",
    bgColor: "#1877F2",
    timestamp: "Just now",
  },
  {
    icon: "instagram",
    message: "Someone commented on your post",
    bgColor: "#E4405F",
    timestamp: "3 hours ago",
  },
];

const NotificationsList = () => {
  return (
    <div className="notifications-list">
      <h1>Notifications (5)</h1>
      {notifications.map((notif, index) => (
        <NotificationCard
          key={index}
          icon={notif.icon}
          message={notif.message}
          bgColor={notif.bgColor}
          timestamp={notif.timestamp}
        />
      ))}
    </div>
  );
};

export default NotificationsList;
