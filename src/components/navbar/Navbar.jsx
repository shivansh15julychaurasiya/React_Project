import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Required for Bootstrap modal
import ProfileCard from "../ProfileCard"; // Import your ProfileCard component

const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm px-4">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand fw-bold text-primary mx-5" href="#">
            Hight Court
          </a>

          <div className="d-flex align-items-center gap-3">
            <span className=" small  font-weight-bold text-dark">{formattedDateTime}</span>

            {/* Button to trigger modal */}
            <button
              type="button"
              className="btn btn-link text-decoration-none"
              data-bs-toggle="modal"
              data-bs-target="#profileModal"
              title="View Profile"
            >
              <FaUserCircle size={29} className="text-primary" />
            </button>

            <span className="fw-semibold">E-High Court</span>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: "70px" }}></div>

      {/* Profile Modal */}
      <div
        className="modal fade"
        id="profileModal"
        tabIndex="-1"
        aria-labelledby="profileModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content border-0 shadow">
            <div className="modal-header border-0 ">
              <h5 className="modal-title fw-bold text-center" id="profileModalLabel">
                User Profile
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
