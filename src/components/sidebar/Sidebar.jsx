import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFileAlt,
  FaCalendarAlt,
  FaChartBar,
  FaBars,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState("");

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const toggleDropdown = (item) =>
    setActiveDropdown((prev) => (prev === item ? "" : item));

  return (
    <>
      {/* Sidebar */}
      <div
        className={`sidebar-custom position-fixed top-0 start-0 h-100 bg-light border-end shadow-sm ${
          isOpen ? "expanded" : "collapsed"
        }`}
        style={{
          zIndex: 1000,
          transition: "all 0.3s ease",
        }}
      >
        <div className="p-3">
          <div className="mb-4 text-center">
            {isOpen && <h5 className="text-primary">High Court</h5>}
          </div>

          <ul className="nav flex-column">
            {/* Home Dropdown */}
            <li className="nav-item">
              <div
                className="nav-link d-flex justify-content-between align-items-center text-dark px-2 py-2 hover-effect"
                onClick={() => toggleDropdown("Home")}
                style={{ cursor: "pointer" }}
              >
                <span>
                  <FaFileAlt className="me-2" />
                  {isOpen && "Home"}
                </span>
                {isOpen && <span>{activeDropdown === "Home" ? "▲" : "▼"}</span>}
              </div>
              {activeDropdown === "Home" && isOpen && (
                <ul className="nav flex-column ms-4">
                  <li className="nav-item">
                    <Link to="/home/dashboard" className="nav-link text-dark px-2 py-1">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/home/search" className="nav-link text-dark px-2 py-1">
                      Search
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/cases_mgmt/assignedCase" className="nav-link text-dark px-2 py-1">
                      Reserved Cases
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/cases_mgmt/status" className="nav-link text-dark px-2 py-1">
                      Status
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Static Link */}
            <li className="nav-item">
              <Link to="/analytics" className="nav-link text-dark px-2 py-2 hover-effect">
                <FaChartBar className="me-2" />
                {isOpen && "Analytics"}
              </Link>
            </li>

            {/* Scheduling Dropdown */}
            <li className="nav-item">
              <div
                className="nav-link d-flex justify-content-between align-items-center text-dark px-2 py-2 hover-effect"
                onClick={() => toggleDropdown("Scheduling")}
                style={{ cursor: "pointer" }}
              >
                <span>
                  <FaCalendarAlt className="me-2" />
                  {isOpen && "Scheduling"}
                </span>
                {isOpen && <span>{activeDropdown === "Scheduling" ? "▲" : "▼"}</span>}
              </div>
              {activeDropdown === "Scheduling" && isOpen && (
                <ul className="nav flex-column ms-4">
                  {["Court Calendar", "Hearing Schedule", "Set Appointment"].map((item, idx) => (
                    <li className="nav-item" key={idx}>
                      <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="nav-link text-dark px-2 py-1">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        className="btn btn-primary position-fixed top-0 start-0 m-2"
        onClick={toggleSidebar}
        style={{ zIndex: 1100 }}
      >
        <FaBars />
      </button>

      {/* Main Content Container Spacer */}
      <div
        style={{
          marginLeft: isOpen ? "250px" : "70px",
          transition: "margin-left 0.3s ease",
        }}
      ></div>

      {/* Extra styles */}
      <style>{`
        .hover-effect:hover {
          background-color: #f8f9fa;
          color: #0d6efd !important;
        }

        .sidebar-custom.collapsed {
          width: 70px;
        }

        .sidebar-custom.expanded {
          width: 250px;
        }

        .sidebar-custom .nav-link {
          white-space: nowrap;
        }

        .sidebar-custom ul {
          list-style: none;
          padding-left: 0;
        }
      `}</style>
    </>
  );
};

export default Sidebar;
