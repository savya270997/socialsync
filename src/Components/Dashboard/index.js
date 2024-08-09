import React from "react";
import "./Dashboard.css";
import facebook from "../../images/facebook-logo.png";
import {
  FaThumbsUp,
  FaComment,
  FaShare,
  FaArrowUp,
  FaArrowDown,
  FaChartLine,
  FaUsers,
  FaShareSquare,
  FaPlus,
  FaStopwatch,
} from "react-icons/fa";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatCard = ({ title, icon, currentCount, prevCount, colorClass }) => {
  const isIncrease = currentCount >= prevCount;
  const countDifference = Math.abs(currentCount - prevCount);
  const percentageChange = ((countDifference / prevCount) * 100).toFixed(2);

  return (
    <div className="stat-card">
      <div className={`stat-card-icon ${colorClass}`}>
        <div className="icon-circle">{icon}</div>
      </div>
      <div className="stat-card-content">
        <h3 className="stat-card-title">{title}</h3>
        <p className="stat-card-count">{currentCount}</p>
      </div>
      <div
        className={`stat-card-change ${isIncrease ? "increase" : "decrease"}`}
      >
        {isIncrease ? <FaArrowUp /> : <FaArrowDown />}
        <span>{percentageChange}%</span>
      </div>
    </div>
  );
};

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Current Year",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Previous Year",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        backgroundColor: "rgba(153,102,255,0.4)",
        borderColor: "rgba(153,102,255,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  return <Line data={data} options={options} />;
};

const BarChart = () => {
  const data = {
    labels: ["March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Income",
        data: [3000, 2500, 2000, 2200, 2700],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

const Dashboard = () => {
  const currentLikes = 120;
  const prevLikes = 100;
  const currentComments = 50;
  const prevComments = 55;
  const currentShares = 25;
  const prevShares = 25;

  const currentAccountsEngaged = 150;
  const prevAccountsEngaged = 140;
  const totalFollowers = 1000;
  const prevFollowers = 980;
  const contentShared = 20;
  const prevContentShared = 18;

  return (
    <>
      <div className="row-maker">
        <div className="social-container">
          <button className="Btn instagram">
            <svg
              className="svgIcon"
              viewBox="0 0 448 512"
              height="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
            <span className="text">Instagram</span>
          </button>

          <button className="Btn facebook">
            <img src={facebook} alt="Facebook logo" />
            <span className="text">Facebook</span>
          </button>

          <button className="Btn twitter">
            <svg
              className="svgIcon"
              viewBox="0 0 512 512"
              height="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M512 97.248c-18.84 8.36-39.082 14.008-60.277 16.54 21.62-12.92 38.212-33.216 46.042-57.45-20.242 12-42.71 20.67-66.61 25.41-19.128-20.412-46.344-33.21-76.51-33.21-58 0-105 47-105 105 0 8.22.926 16.188 2.714 23.914-87.18-4.376-164.66-46.2-216.45-109.97-9.066 15.508-14.254 33.586-14.254 52.836 0 36.37 18.54 68.542 46.844 87.428-17.272-.554-33.52-5.286-47.754-13.158v1.32c0 50.828 36.13 93.15 84.198 102.79-8.826 2.396-18.14 3.686-27.734 3.686-6.78 0-13.34-.664-19.676-1.902 13.36 41.77 52.164 72.198 98.116 73.052-35.96 28.17-81.38 44.99-130.76 44.99-8.54 0-16.94-.5-25.14-1.476 46.684 29.922 101.99 47.31 161.18 47.31 193.32 0 298.924-160.078 298.924-298.926 0-4.554-.106-9.086-.306-13.594 20.546-14.824 38.364-33.298 52.456-54.422z"></path>
            </svg>
            <span className="text">Twitter</span>
          </button>
          <button className="Btn create">
            <div className="icy">
              <FaPlus />
            </div>

            <span className="text">
              <h3>Create Post</h3>
            </span>
          </button>
          <button className="Btn create">
            <div className="icy">
              <FaStopwatch />
            </div>

            <span className="text">
              <h3>Schedule Post</h3>
            </span>
          </button>
        </div>
      </div>

      <div className="stat-container">
        <StatCard
          title="Likes"
          icon={<FaThumbsUp />}
          currentCount={currentLikes}
          prevCount={prevLikes}
          colorClass="blue-circle"
        />
        <StatCard
          title="Comments"
          icon={<FaComment />}
          currentCount={currentComments}
          prevCount={prevComments}
          colorClass="yellow-circle"
        />
        <StatCard
          title="Shares"
          icon={<FaShare />}
          currentCount={currentShares}
          prevCount={prevShares}
          colorClass="orange-circle"
        />
      </div>

      <div className="graph-container">
        <div className="graph">
          <h2 className="stat-card-title-big">Impressions</h2>
          <LineChart />
        </div>
        <div className="graph">
          <h2 className="stat-card-title-big">Monetization</h2>
          <BarChart />
        </div>
      </div>
      <div className="additional-stat-container">
        <StatCard
          title="Accounts Engaged"
          icon={<FaChartLine />}
          currentCount={currentAccountsEngaged}
          prevCount={prevAccountsEngaged}
          colorClass="orange-circle"
        />
        <StatCard
          title="Total Followers"
          icon={<FaUsers />}
          currentCount={totalFollowers}
          prevCount={prevFollowers}
          colorClass="blue-circle"
        />
        <StatCard
          title="Content Shared"
          icon={<FaShareSquare />}
          currentCount={contentShared}
          prevCount={prevContentShared}
          colorClass="yellow-circle"
        />
      </div>
    </>
  );
};

export default Dashboard;
