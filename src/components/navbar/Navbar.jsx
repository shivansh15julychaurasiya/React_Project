import React from 'react';
import { FaBell, FaUserCircle, FaSearch } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JavaScript (needs Popper.js too)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.min.css";



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4 py-2">
      <a className="navbar-brand fw-bold text-primary" href="/">
     
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        {/* Left Menu */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item mx-2">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>

          {/* Dropdown */}
          <li className="nav-item dropdown mx-2">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="/web">
                  Web Development
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/mobile">
                  Mobile Apps
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/other">
                  Other Services
                </a>
              </li>
            </ul>
          </li>
        </ul>

        {/* Search */}
        <form className="d-flex me-3">
          <input
            className="form-control me-2 rounded-pill"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
          <button className="btn btn-outline-primary rounded-pill" type="submit">
            <FaSearch />
          </button>
        </form>

        {/* Icons */}
        <div className="d-flex align-items-center gap-3">
          <FaBell size={18} className="text-dark" />
          <FaUserCircle size={24} className="text-primary" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
