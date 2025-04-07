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

  // Format: Monday, 07 April 2025, 10:32:15 AM
  const formattedDateTime = currentDateTime.toLocaleString("en-US", {
    weekday: "long",      // Sunday, Monday...
    year: "numeric",
    month: "long",        // January, February...
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded shadow-sm px-4 mb-1">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left: Brand */}
        <a className="navbar-brand fw-bold" href="#">
          {/* Case Manager */}
        </a>

        {/* Right: Date/Time and Profile */}
        <div className="d-flex align-items-center gap-3">
          <span className="text-muted small">{formattedDateTime}</span>
          <FaUserCircle size={28} className="text-primary" />
        E-High Court

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
