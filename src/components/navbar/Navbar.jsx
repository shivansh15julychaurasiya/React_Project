import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm px-4">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand fw-bold text-primary mx-5"  href="#">
            {/* Case Manager */} Hight Court
          </a>

          <div className="d-flex align-items-center gap-3">
            <span className="text-muted small">{formattedDateTime}</span>
            <FaUserCircle size={28} className="text-primary" />
            E-High Court
          </div>
        </div>
      </nav>

      {/* Spacer to avoid overlap */}
      <div style={{ height: "70px" }}></div>
    </>
  );
};

export default Navbar;
