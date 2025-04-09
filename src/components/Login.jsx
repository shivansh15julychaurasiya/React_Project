import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Login = () => {
  const wrapperStyle = {
    height: "100vh",
    backgroundImage:
      "url('https://as2.ftcdn.net/jpg/06/12/69/39/1000_F_612693965_Ic0XfvkMa44xQXHA8lonULgqoEzyS0Xl.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "2rem",
    borderRadius: "1.5rem",
    maxWidth: "400px",
    width: "100%",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
  };

  const btnStyle = {
    backgroundColor: "#6c63ff",
    border: "none",
  };

  const btnHoverStyle = {
    backgroundColor: "#574fd6",
  };

  return (
    <div style={wrapperStyle}>
      <div style={cardStyle}>
        <h2 className="text-center mb-4">
          <i className="bi bi-person-circle me-2"></i>Login
        </h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              style={btnStyle}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = btnHoverStyle.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = btnStyle.backgroundColor)
              }
            >
              <i className="bi bi-box-arrow-in-right me-1"></i> Login
            </button>
          </div>
          <div className="text-center mt-3 text-light">
            <Link to="/home/forgot" className="text-decoration-none">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
