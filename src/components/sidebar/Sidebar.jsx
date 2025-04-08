import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaCalendarAlt,
  FaBalanceScale,
  FaChartBar,
  FaCog,
  FaBars,
  FaUsers,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState("");

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const toggleDropdown = (item) => {
    setActiveDropdown((prev) => (prev === item ? "" : item));
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-light border-end p-3 sidebar-custom ${
          isOpen ? "expanded" : "collapsed"
        }`}
        style={{
          transition: "all 0.3s ease",
          overflowX: "hidden",
          height: "100vh",
          position: "fixed",
          zIndex: 1000,
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1></h1>
         
          {/* {isOpen && <h4 className="text-primary m-0">High Court</h4>} */}
        </div>

        <ul className="nav flex-column">
          {/* Dropdown Items */}
          <li className="nav-item">
            <div
              className="nav-link text-dark px-2 py-2 rounded d-flex justify-content-between align-items-center hover-effect"
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
                  <Link
                    to="/home/dashboard"
                    className="nav-link text-dark px-3 py-2 hover-effect"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/home/search"
                    className="nav-link text-dark px-3 py-2 hover-effect"
                  >
                    Search
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/cases_mgmt/assignedCase"
                    className="nav-link text-dark px-3 py-2 hover-effect"
                  >
                    Reserved Cases
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/cases_mgmt/status"
                    className="nav-link text-dark px-3 py-2 hover-effect"
                  >
                    Status
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Example of static link */}
          <li className="nav-item">
            <Link
              to="/analytics"
              className="nav-link text-dark px-2 py-2 hover-effect"
            >
              <FaChartBar className="me-2" />
              {isOpen && "Analytics"}
            </Link>
          </li>

          {/* Additional Dropdowns - only show full when expanded */}
          <li className="nav-item">
            <div
              className="nav-link text-dark px-2 py-2 rounded d-flex justify-content-between align-items-center hover-effect"
              onClick={() => toggleDropdown("Scheduling")}
              style={{ cursor: "pointer" }}
            >
              <span>
                <FaCalendarAlt className="me-2" />
                {isOpen && "Scheduling"}
              </span>
              {isOpen && (
                <span>{activeDropdown === "Scheduling" ? "▲" : "▼"}</span>
              )}
            </div>
            {activeDropdown === "Scheduling" && isOpen && (
              <ul className="nav flex-column ms-4">
                {["Court Calendar", "Hearing Schedule", "Set Appointment"].map(
                  (item, idx) => (
                    <li className="nav-item" key={idx}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="nav-link text-dark px-3 py-2 hover-effect"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            )}
          </li>

          {/* More sections go here... (client, messages, report, communication, etc.) */}
        </ul>
      </div>

      {/* Toggle Sidebar Button */}
      <button
        className="btn btn-secondary position-fixed top-0 start-0 m-2"
        onClick={toggleSidebar}
        style={{ zIndex: 1100 }}
      >
        <FaBars />
      </button>

      {/* Content Padding (beside sidebar) */}
      <div
        style={{
          marginLeft: isOpen ? "250px" : "70px",
          transition: "margin-left 0.3s ease",
          width: "100%",
        }}
      >
        {/* Your main content goes here */}
      </div>

      {/* Style for hover effect and sidebar sizes */}
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

        .sidebar-custom .nav-item ul {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
