import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import {
  FaHome,
  FaUserAlt,
  FaCalendarAlt,
  FaBalanceScale,
  FaChartBar,
  FaCog,
  FaBars,
  FaTimes,
  FaUsers,
  FaFileAlt,
  FaEnvelope
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState('');

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleDropdown = (item) => {
    setActiveDropdown((prev) => (prev === item ? '' : item));
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-light border-end p-3 ${isOpen ? 'd-block' : 'd-none d-md-block'}`}
        style={{ width: isOpen ? '250px' : '0px', transition: 'width 0.4s ease' }}
      >
        <h4 className="text-primary d-flex justify-content-between align-items-center">
          High Court
          <span className="d-md-none" onClick={toggleSidebar} style={{ cursor: 'pointer' }}>
            <FaTimes />
          </span>
        </h4>

        <ul className="nav flex-column mt-4">

          {/* Category Dropdown */}
          <li className="nav-item">
    <div
      className="nav-link text-dark px-3 py-2 rounded d-flex justify-content-between align-items-center hover-effect"
      onClick={() => toggleDropdown('Home')}
      style={{ cursor: 'pointer' }}
    >
      <span><FaFileAlt className="me-2" /> Home</span>
      <span>{activeDropdown === 'Home' ? '▲' : '▼'}</span>
    </div>
    {activeDropdown === 'Home' && (
      <ul className="nav flex-column ms-4">
        <li className="nav-item">
          <Link to="/home/dashboard" className="nav-link text-dark px-3 py-2 rounded hover-effect">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/home/search" className="nav-link text-dark px-3 py-2 rounded hover-effect">
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cases_mgmt/assignedCase" className="nav-link text-dark px-3 py-2 rounded hover-effect">
            Reserved Cases
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cases_mgmt/status" className="nav-link text-dark px-3 py-2 rounded hover-effect">
            Status
          </Link>
        </li>
        {/* Add more Link items similarly */}
      </ul>
    )}
  </li>

       {/* Messages Dropdown */}
<li className="nav-item">
  <div
    className="nav-link text-dark px-3 py-2 rounded d-flex justify-content-between align-items-center hover-effect"
    onClick={() => toggleDropdown('messages')}
    style={{ cursor: 'pointer' }}
  >
    <span><FaBalanceScale className="me-2" />List Of Cases</span>
    <span>{activeDropdown === 'cases' ? '▲' : '▼'}</span>
  </div>
  {activeDropdown === 'messages' && (
    <ul className="nav flex-column ms-4">
      <li className="nav-item">
        <Link to="/judge_lawyer/judgeDirectory" className="nav-link text-dark px-3 py-2 rounded hover-effect">
          Judge Directory
        </Link>
      </li>
      <li className="nav-item">
        <Link to="judge_lawyer/lawyerDirectory" className="nav-link text-dark px-3 py-2 rounded hover-effect">
          Lawyer Directory
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/assign-judge-lawyer" className="nav-link text-dark px-3 py-2 rounded hover-effect">
          Assign Judge/Lawyer
        </Link>
      </li>
    </ul>
  )}
</li>

          {/* Profile Dropdown */}
          <li className="nav-item">
            <div
              className="nav-link text-dark px-3 py-2 rounded d-flex justify-content-between align-items-center hover-effect"
              onClick={() => toggleDropdown('client')}
              style={{ cursor: 'pointer' }}
            >
              <span><FaUserAlt className="me-2" /> Transferred Cases</span>
              <span>{activeDropdown === 'client' ? '▲' : '▼'}</span>
            </div>
            {activeDropdown === 'client' && (
              <ul className="nav flex-column ms-4">
                {['Client List', 'Add New Client', 'Client History'].map((item, idx) => (
                  <li className="nav-item" key={idx}>
                    <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className="nav-link text-dark px-3 py-2 rounded hover-effect">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="nav-item">
            <a href="#analytics" className="nav-link text-dark px-3 py-2 rounded hover-effect">
              <FaChartBar className="me-2" /> Analytics
            </a>
          </li>

          {/* Settings Dropdown */}
          <li className="nav-item">
            <div
              className="nav-link text-dark px-3 py-2 rounded d-flex justify-content-between align-items-center hover-effect"
              onClick={() => toggleDropdown('Scheduling')}
              style={{ cursor: 'pointer' }}
            >
              <span><FaCalendarAlt className="me-2" /> Scheduling</span>
              <span>{activeDropdown === 'Scheduling' ? '▲' : '▼'}</span>
            </div>
            {activeDropdown === 'Scheduling' && (
              <ul className="nav flex-column ms-4">
                {['Court Calendar', 'Hearing Schedule', 'Set Appointment'].map((item, idx) => (
                  <li className="nav-item" key={idx}>
                    <a href={`#${item.toLowerCase()}`} className="nav-link text-dark px-3 py-2 rounded hover-effect">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="nav-item">
            <div
              className="nav-link text-dark px-3 py-2 rounded d-flex justify-content-between align-items-center hover-effect"
              onClick={() => toggleDropdown('Report')}
              style={{ cursor: 'pointer' }}
            >
              <span><FaCog className="me-2" /> Report</span>
              <span>{activeDropdown === 'Report' ? '▲' : '▼'}</span>
            </div>
            {activeDropdown === 'Report' && (
              <ul className="nav flex-column ms-4">
                {['Case Report', 'Performance Reports', 'Case Category Report','Date Renage Report'].map((item, idx) => (
                  <li className="nav-item" key={idx}>
                    <a href={`#${item.toLowerCase()}`} className="nav-link text-dark px-3 py-2 rounded hover-effect">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="nav-item">
            <div
              className="nav-link text-dark px-3 py-2 rounded d-flex justify-content-between align-items-center hover-effect"
              onClick={() => toggleDropdown('Communication')}
              style={{ cursor: 'pointer' }}
            >
              <span><FaEnvelope className="me-2" /> Communication</span>
              <span>{activeDropdown === 'Communication' ? '▲' : '▼'}</span>
            </div>
            {activeDropdown === 'Communication' && (
              <ul className="nav flex-column ms-4">
                {['Notification', 'Message', 'Chat Support'].map((item, idx) => (
                  <li className="nav-item" key={idx}>
                    <a href={`#${item.toLowerCase()}`} className="nav-link text-dark px-3 py-2 rounded hover-effect">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Toggle Button */}
      <button
        className="btn btn-primary d-md-none position-fixed top-0 start-0 m-3"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      {/* Embedded Bootstrap-style hover effect */}
      <style>{`
        .hover-effect:hover {
          background-color: #f8f9fa;
          color: #0d6efd !important;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
