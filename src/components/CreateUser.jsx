import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
    password: "",
    phone: "",
    login_id: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8081/dms/auth/create", {
        ...formData,
        login_id: formData.login_id.toString(),
      });
      alert("Registration successful! Please login.");
      navigate("/home/login");
    } catch (error) {
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const wrapperStyle = {
    minHeight: "100vh",
    backgroundImage:
      "url('https://as2.ftcdn.net/jpg/06/12/69/39/1000_F_612693965_Ic0XfvkMa44xQXHA8lonULgqoEzyS0Xl.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  };

  const cardStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "2rem",
    borderRadius: "1.5rem",
    width: "100%",
    maxWidth: "700px",
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
      <div className="container-fluid">
        <div style={cardStyle} className="mx-auto">
          <h2 className="text-center mb-4">
            <i className="bi bi-person-plus-fill me-2"></i>create
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="login_id" className="form-label">Login ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="login_id"
                  placeholder="Enter login ID"
                  value={formData.login_id}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="about" className="form-label">About</label>
                <textarea
                  className="form-control"
                  id="about"
                  rows="3"
                  placeholder="Tell us about yourself"
                  value={formData.about}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-12">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 d-grid">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={btnStyle}
                  onMouseOver={(e) => (e.target.style.backgroundColor = btnHoverStyle.backgroundColor)}
                  onMouseOut={(e) => (e.target.style.backgroundColor = btnStyle.backgroundColor)}
                  disabled={loading}
                >
                  {loading ? "createing..." : (
                    <>
                      <i className="bi bi-person-check-fill me-1"></i> Create
                    </>
                  )}
                </button>
              </div>
            </div>

           
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
