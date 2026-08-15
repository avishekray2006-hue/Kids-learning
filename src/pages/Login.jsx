import { useState } from "react";
import { loginUser } from "../services/authApi";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const data = await loginUser(formData);

      // JWT token save
      localStorage.setItem("token", data.token);

      // User data save
      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage("Login successful 🎉");

      // Login ke baad Home page
      setTimeout(() => {
        navigate("/home");
      }, 800);

    } catch (error) {
      setMessage(error.message || "Login failed ❌");
    } finally {
      setLoading(false);
    }
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

  const boxStyle = {
    width: "100%",
    maxWidth: "430px",
    background: "white",
    padding: "35px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    boxSizing: "border-box",
  };

  const titleStyle = {
    textAlign: "center",
    color: "#1e293b",
    marginBottom: "8px",
    fontSize: "30px",
  };

  const textStyle = {
    textAlign: "center",
    color: "#64748b",
    marginBottom: "25px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const labelStyle = {
    marginBottom: "6px",
    fontWeight: "bold",
    color: "#334155",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "18px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    fontSize: "16px",
    boxSizing: "border-box",
    outline: "none",
  };

  const buttonStyle = {
    padding: "13px",
    border: "none",
    borderRadius: "8px",
    background: loading ? "#94a3b8" : "#4338ca",
    color: "white",
    fontSize: "17px",
    fontWeight: "bold",
    cursor: loading ? "not-allowed" : "pointer",
  };

  const messageStyle = {
    textAlign: "center",
    marginTop: "18px",
    fontWeight: "bold",
    color: message.includes("successful")
      ? "#166534"
      : "#dc2626",
  };

  const signupTextStyle = {
    textAlign: "center",
    marginTop: "20px",
    color: "#64748b",
  };

  const signupLinkStyle = {
    color: "#4338ca",
    fontWeight: "bold",
    textDecoration: "none",
  };

  return (
    <div style={pageStyle}>

      <div style={boxStyle}>

        <h1 style={titleStyle}>
          Login 🔐
        </h1>

        <p style={textStyle}>
          Welcome back to Kids Learning Website
        </p>

        <form
          onSubmit={handleSubmit}
          style={formStyle}
        >

          {/* Email */}
          <label style={labelStyle}>
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          {/* Password */}
          <label style={labelStyle}>
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          {/* Login Button */}
          <button
            type="submit"
            style={buttonStyle}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* Message */}
        {message && (
          <p style={messageStyle}>
            {message}
          </p>
        )}

        {/* Signup */}
        <p style={signupTextStyle}>
          Don't have an account?{" "}

          <Link
            to="/signup"
            style={signupLinkStyle}
          >
            Signup
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;