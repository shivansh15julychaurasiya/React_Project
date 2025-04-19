import React, { useEffect, useState } from "react";

const ProfileCard = () => {
  const [user, setUser] = useState(null);

  //  Fetch user data when component loads
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setUser(null);
        return;
      }

      try {
        const res = await fetch("http://localhost:8081/dms/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Unauthorized");

        const data = await res.json();
        setUser(data); //  user data available here
        console.log(data)
      } catch (error) {
        console.error("Error fetching user:", error.message);
        setUser(null);
      }
    };

    fetchUserData();
  }, []);

  // Listen for logout in other tabs
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "logout") {
        localStorage.removeItem("token");
        window.location.href = "/home/login";
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:8081/dms/auth/logout", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log("Logout success:", data.message);

      localStorage.removeItem("token");
      localStorage.setItem("logout", Date.now().toString());

      window.location.href = "/home/login";
    } catch (error) {
      console.error("Logout error:", error.message);
      alert("Error logging out");
    }
  };

  const handleProfile = () => {
    window.location.href = "/home/editprofile";
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card p-4 shadow-lg rounded-4" style={{ maxWidth: "400px" }}>
        <div className="d-flex flex-column align-items-center text-center">
          <img
            src="https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_1280.jpg"
            alt="Profile"
            className="rounded-circle"
            width="100"
            height="100"
          />
          <h4 className="mb-0">{user ? user.name : "Guest"}</h4>
          <small className="text-muted mb-3">
            {user ? user.email : "Please login to view your details"}
          </small>

          <p className="text-center text-muted">
            {user ? user.about : "You are viewing the profile as a guest."}
          </p>

          <div className="d-flex gap-2">
            {user ? (
              <>
                <button
                  className="btn btn-primary px-4 rounded-pill"
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right p-2 btn-sm"></i>
                  Log-out
                </button>

                <button
                  className="btn btn-success btn-sm px-4 rounded-pill"
                  onClick={handleProfile}
                >
                  <i className="bi bi-pencil p-2"></i>
                  Edit Profile
                </button>
              </>
            ) : (
              <a href="/home/login" className="btn btn-outline-primary rounded-pill px-4">
                Login
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
