import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const pageStyle = {
    minHeight: "calc(100vh - 80px)",
    background: "linear-gradient(135deg, #1e293b, #4338ca)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 20px",
    boxSizing: "border-box",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "480px",
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    textAlign: "center",
    boxSizing: "border-box",
  };

  const avatarStyle = {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    background: "#4338ca",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 20px",
    fontSize: "40px",
    fontWeight: "bold",
  };

  const titleStyle = {
    color: "#1e293b",
    marginBottom: "25px",
  };

  const infoStyle = {
    background: "#f1f5f9",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "15px",
    textAlign: "left",
  };

  const buttonStyle = {
    padding: "12px 25px",
    border: "none",
    borderRadius: "8px",
    background: "#4338ca",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    margin: "10px",
  };

  const logoutStyle = {
    ...buttonStyle,
    background: "#dc2626",
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>

        <div style={avatarStyle}>
          {user?.name?.charAt(0)?.toUpperCase() || "U"}
        </div>

        <h1 style={titleStyle}>
          My Profile 👤
        </h1>

        <div style={infoStyle}>
          <strong>Name:</strong>
          <p>{user?.name || "User"}</p>
        </div>

        <div style={infoStyle}>
          <strong>Email:</strong>
          <p>{user?.email || "Email not available"}</p>
        </div>

        <Link to="/courses">
          <button style={buttonStyle}>
            Go to Courses 📚
          </button>
        </Link>

        <button
          onClick={handleLogout}
          style={logoutStyle}
        >
          Logout 🚪
        </button>

      </div>
    </div>
  );
}

export default Profile;