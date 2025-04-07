import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaChartBar,
  FaCog,
  FaBars,
  FaTimes,
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
        className={`bg-light border-end p-3 ${
          isOpen ? 'd-block' : 'd-none d-md-block'
        }`}
        style={{ width: isOpen ? '250px' : '0px', transition: '0.3s' }}
      >
        <h4 className="text-primary d-flex justify-content-between align-items-center">
          Dashboard
          <span className="d-md-none" onClick={toggleSidebar} style={{ cursor: 'pointer' }}>
            <FaTimes />
          </span>
        </h4>

        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <a href="#home" className="nav-link text-dark">
              <FaHome className="me-2" /> Home
            </a>
          </li>

          <li className="nav-item">
            <div
              className="nav-link text-dark d-flex justify-content-between align-items-center"
              onClick={() => toggleDropdown('profile')}
              style={{ cursor: 'pointer' }}
            >
              <span>
                <FaUser className="me-2" /> Profile
              </span>
              <span>{activeDropdown === 'profile' ? '▲' : '▼'}</span>
            </div>
            {activeDropdown === 'profile' && (
              <ul className="nav flex-column ms-4">
                <li className="nav-item">
                  <a href="#personal" className="nav-link text-dark">
                    Personal Info
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#settings" className="nav-link text-dark">
                    Account Settings
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#billing" className="nav-link text-dark">
                    Billing
                  </a>
                </li>
              </ul>
            )}
          </li>

          
          <li className="nav-item">
            <div
              className="nav-link text-dark d-flex justify-content-between align-items-center"
              onClick={() => toggleDropdown('Category')}
              style={{ cursor: 'pointer' }}
            >
              <span>
                <FaUser className="me-2" /> Category
              </span>
              <span>{activeDropdown === 'Category' ? '▲' : '▼'}</span>
            </div>
            {activeDropdown === 'Category' && (
              <ul className="nav flex-column ms-4">
                <li className="nav-item">
                  <a href="#personal" className="nav-link text-dark">
                    Personal Info
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#settings" className="nav-link text-dark">
                    Account Settings
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#billing" className="nav-link text-dark">
                    Billing
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className="nav-item">
            <div
              className="nav-link text-dark d-flex justify-content-between align-items-center"
              onClick={() => toggleDropdown('messages')}
              style={{ cursor: 'pointer' }}
            >
              <span>
                <FaEnvelope className="me-2" /> Messages
              </span>
              <span>{activeDropdown === 'messages' ? '▲' : '▼'}</span>
            </div>
            {activeDropdown === 'messages' && (
              <ul className="nav flex-column ms-4">
                <li className="nav-item">
                  <a href="#inbox" className="nav-link text-dark">
                    Inbox
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#sent" className="nav-link text-dark">
                    Sent
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#drafts" className="nav-link text-dark">
                    Drafts
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className="nav-item">
            <a href="#analytics" className="nav-link text-dark">
              <FaChartBar className="me-2" /> Analytics
            </a>
          </li>

          <li className="nav-item">
            <div
              className="nav-link text-dark d-flex justify-content-between align-items-center"
              onClick={() => toggleDropdown('settings')}
              style={{ cursor: 'pointer' }}
            >
              <span>
                <FaCog className="me-2" /> Settings
              </span>
              <span>{activeDropdown === 'settings' ? '▲' : '▼'}</span>
            </div>
            {activeDropdown === 'settings' && (
              <ul className="nav flex-column ms-4">
                <li className="nav-item">
                  <a href="#preferences" className="nav-link text-dark">
                    Preferences
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#security" className="nav-link text-dark">
                    Security
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#notifications" className="nav-link text-dark">
                    Notifications
                  </a>
                </li>
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
    </div>
  );
};

export default Sidebar;
