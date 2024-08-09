import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import "./PartnershipAds.css";

const PartnershipAds = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [activeMenu, setActiveMenu] = useState(null);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const deals = {
    active: [
      {
        brand: "Nike",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        cost: 500,
      },
      {
        brand: "Adidas",
        startDate: "2024-02-01",
        endDate: "2024-11-30",
        cost: 450,
      },
    ],
    inactive: [
      {
        brand: "Puma",
        startDate: "2023-01-01",
        endDate: "2023-12-31",
        cost: 400,
      },
      {
        brand: "Reebok",
        startDate: "2022-05-01",
        endDate: "2023-04-30",
        cost: 300,
      },
    ],
  };

  return (
    <div className="partnershipAds">
      <div className="tabs">
        <button
          onClick={() => handleTabSwitch("active")}
          className={activeTab === "active" ? "active" : ""}
        >
          Active
        </button>
        <button
          onClick={() => handleTabSwitch("inactive")}
          className={activeTab === "inactive" ? "active" : ""}
        >
          Inactive
        </button>
      </div>
      <div className="table-container">
        <table className="dealsTable">
          <thead>
            <tr>
              <th>Brand Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Cost per Post</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {deals[activeTab].map((deal, index) => (
              <tr key={index}>
                <td>{deal.brand}</td>
                <td>{deal.startDate}</td>
                <td>{deal.endDate}</td>
                <td>${deal.cost}</td>
                <td>
                  <div className="actionMenu">
                    <FaEllipsisV onClick={() => handleMenuClick(index)} />
                    {activeMenu === index && (
                      <ul className="dropdown">
                        <li>Cancel Deal</li>
                        <li>Make Inactive</li>
                        <li>View</li>
                      </ul>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartnershipAds;
